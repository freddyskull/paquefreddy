import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { recordsDto } from './dto/record.dto';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from 'src/config/config.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class RecordsService {
  private prisma: PrismaClient;

  constructor(
    private readonly configService: ConfigService,
    private productServices: ProductsService
  ) {
    this.prisma = new PrismaClient();
  }

  private formatedData = {
    id: true,
    productList: true,
    dolar_price: true,
    status: true,
    totals: true,
    user_id: true,
    black_list_user_id: true,
    createdAt: true,
    updatedAt: true
  };

  async recordExists(
    field: keyof recordsDto,
    value: any,
    message: string = 'Intentas duplicar una venta, por favor verifica la venta'
  ): Promise<void> {
    const record = await this.prisma.records.findFirst({
      where: {
        [field]: value
      }
    });
    if (record) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(dto: recordsDto) {
    const config = await this.configService.findAll();
    const dolar = config?.dolar || 0;

    for (const item of dto.productList) {
      const product = await this.productServices.findOne(item.id);
      if (!product) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            message: `Producto con ID ${item.id} no encontrado`
          },
          HttpStatus.NOT_FOUND
        );
      }
      if (product.stock < item.quantity) {
        throw new HttpException(
          {
            status: 'ERROR',
            title: 'Falta de stock',
            message: `No se realizó la venta, el 'stock' es insuficiente para el producto '${product.name || product.id}'.`
          },
          HttpStatus.BAD_REQUEST
        );
      }
    }

    // Si todos los productos tienen stock suficiente, restar el stock
    for (const item of dto.productList) {
      await this.productServices.updateStock(item.id, item.quantity);
    }
    // FIXED: hacer que de un mensaje diferente si hay una persona de la blackList
    const createdRecord = await this.prisma.records.create({
      select: this.formatedData,
      data: { ...dto, dolar_price: dolar }
    });
    return {
      status: 'ok',
      title: 'Venta realizada',
      data: dto,
      id: createdRecord.id,
      message: 'La lista de productos fué descontada de el stock de productos.'
    };
  }

  findAll() {
    return this.prisma.records.findMany({
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async findOne(id: number) {
    if (!id) {
      throw new HttpException(
        'El ID de la venta es requerido',
        HttpStatus.BAD_REQUEST
      );
    }
    return this.prisma.records
      .findFirst({
        where: { id: Number(id) },
        select: this.formatedData
      })
      .then((record) => {
        if (!record) {
          throw new HttpException(
            'No existe la venta con el ID ' + id,
            HttpStatus.BAD_REQUEST
          );
        }
        return record;
      });
  }

  update(id: number, updateRecordDto: recordsDto) {
    return `This action updates a #${id} record`;
  }

  async remove(id: number) {
    const record = await this.prisma.records.findFirst({
      where: { id: Number(id) }
    });
    if (!record) {
      throw new HttpException(
        'No existe la venta con el ID ' + id,
        HttpStatus.BAD_REQUEST
      );
    }
    await this.prisma.records.delete({
      where: { id },
      select: this.formatedData
    });
    const data = await this.findAll();
    return {
      status: 'ok',
      title: 'Registro eliminado',
      message: `El registro con ID ${id} ha sido eliminado correctamente.`,
      data
    };
  }

  async findByDateRange(startDate: Date, endDate: Date) {
    const records = await this.prisma.records.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      },
      select: this.formatedData,
      orderBy: { createdAt: 'desc' }
    });

    const count = records.length;

    // Variables acumuladoras
    const totals = {
      totalBs: 0,
      totalDolar: 0,
      totalProfits: { bs: 0, usd: 0 }
    };
    const productCount: Record<
      string,
      { name: string; quantity: number; category?: string }
    > = {};
    const categoryCount: Record<string, number> = {};

    // Track para top directos
    let topProduct: {
      name: string;
      quantity: number;
      category?: string;
    } | null = null;
    let maxProductQty = 0;
    let topCategory: { category: string; quantity: number } | null = null;
    let maxCatQty = 0;

    for (const record of records) {
      // ---- Totals ----
      let t: any = record.totals;
      if (typeof t === 'string') {
        try {
          t = JSON.parse(t);
        } catch {
          t = null;
        }
      }
      if (t && typeof t === 'object' && !Array.isArray(t)) {
        const totalBs = Number(t.totalBs);
        const totalDolar = Number(t.totalDolar);
        const profitBs = Number(t?.totalProfits?.bs);
        const profitUsd = Number(t?.totalProfits?.usd);

        if (!isNaN(totalBs)) totals.totalBs += totalBs;
        if (!isNaN(totalDolar)) totals.totalDolar += totalDolar;
        if (!isNaN(profitBs)) totals.totalProfits.bs += profitBs;
        if (!isNaN(profitUsd)) totals.totalProfits.usd += profitUsd;
      }

      // ---- Productos y Categorías ----
      let productList = record.productList;
      if (typeof productList === 'string') {
        try {
          productList = JSON.parse(productList);
        } catch {
          productList = [];
        }
      }

      if (Array.isArray(productList)) {
        for (const prod of productList) {
          if (!prod || typeof prod !== 'object') continue;
          if (!('id' in prod || 'name' in prod) || !('quantity' in prod))
            continue;

          const prodId =
            prod.id !== undefined &&
            (typeof prod.id === 'string' || typeof prod.id === 'number')
              ? String(prod.id)
              : typeof prod.name === 'string'
                ? prod.name
                : null;
          if (!prodId) continue;

          const prodName = prod.name ? String(prod.name) : prodId;
          const prodQty = Number(prod.quantity);
          if (isNaN(prodQty) || prodQty <= 0) continue;

          // Detectar categoría
          let prodCat = 'Sin categoría';
          if (
            prod.categorie &&
            typeof prod.categorie === 'object' &&
            'name' in prod.categorie &&
            typeof (prod.categorie as any).name === 'string'
          ) {
            prodCat = String((prod.categorie as any).name);
          } else if (prod.category) {
            prodCat = String(prod.category);
          }

          // Contar producto
          if (!productCount[prodId]) {
            productCount[prodId] = {
              name: prodName,
              quantity: 0,
              category: prodCat
            };
          }
          productCount[prodId].quantity += prodQty;

          // Actualizar top product en tiempo real
          if (productCount[prodId].quantity > maxProductQty) {
            maxProductQty = productCount[prodId].quantity;
            topProduct = productCount[prodId];
          }

          // Contar categoría
          if (!categoryCount[prodCat]) categoryCount[prodCat] = 0;
          categoryCount[prodCat] += prodQty;

          // Actualizar top category en tiempo real
          if (categoryCount[prodCat] > maxCatQty) {
            maxCatQty = categoryCount[prodCat];
            topCategory = {
              category: prodCat,
              quantity: categoryCount[prodCat]
            };
          }
        }
      }
    }

    return {
      count,
      records,
      totals,
      'date-range': { startDate, endDate },
      topProduct,
      topCategory
    };
  }

  /**
   * Obtiene productos vendidos por thresholds, con paginación y límite.
   * @param startDate Fecha inicio
   * @param endDate Fecha fin
   * @param lowThreshold Límite bajo
   * @param highThreshold Límite alto
   * @param limit Cantidad máxima de productos a mostrar por grupo (default 30, 'all' para sin límite)
   * @param page Página de resultados (default 1)
   */
  async sellingProductsByThresholds(
    startDate: Date,
    endDate: Date,
    lowThreshold: number = 5,
    highThreshold: number = 10,
    limit: number | 'all' = 30,
    page: number = 1
  ) {
    if (!startDate || !endDate) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Debe proporcionar startDate y endDate válidos.'
        },
        HttpStatus.BAD_REQUEST
      );
    }
    if (typeof lowThreshold !== 'number' || typeof highThreshold !== 'number') {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'lowThreshold y highThreshold deben ser números.'
        },
        HttpStatus.BAD_REQUEST
      );
    }

    const records = await this.prisma.records.findMany({
      where: {
        createdAt: { gte: startDate, lte: endDate }
      },
      select: {
        productList: true
      }
    });

    const productSales: Record<
      string,
      { qty: number; name?: string; category?: string }
    > = {};

    for (const record of records) {
      let productList = record.productList;
      if (typeof productList === 'string') {
        try {
          productList = JSON.parse(productList);
        } catch {
          productList = [];
        }
      }
      if (!Array.isArray(productList)) continue;

      for (const prod of productList) {
        if (
          prod &&
          typeof prod === 'object' &&
          ('id' in prod || 'name' in prod) &&
          'quantity' in prod
        ) {
          let prodId: string | null = null;
          if (
            prod.id !== undefined &&
            (typeof prod.id === 'string' || typeof prod.id === 'number')
          ) {
            prodId = String(prod.id);
          } else if (prod.name && typeof prod.name === 'string') {
            prodId = prod.name;
          }
          if (!prodId) continue;
          const prodName = prod.name ? String(prod.name) : undefined;
          const prodQty = Number(prod.quantity) || 0;
          const prodCat =
            'category' in prod && prod.category
              ? String(prod.category)
              : undefined;

          if (!productSales[prodId]) {
            productSales[prodId] = { qty: 0 };
            if (prodName) productSales[prodId].name = prodName;
            if (prodCat) productSales[prodId].category = prodCat;
          }
          productSales[prodId].qty += prodQty;
        }
      }
    }

    let lowSelling: Array<{
      prodId: string;
      qty: number;
      profits: number;
      name?: string;
      category?: string;
      slugs_url?: string;
      image: string | null;
    }> = [];
    let highSelling: Array<{
      prodId: string;
      qty: number;
      profits: number;
      name?: string;
      category?: string;
      slugs_url?: string;
      image: string | null;
    }> = [];

    for (const [prodId, data] of Object.entries(productSales)) {
      let slugs_url: string | undefined = undefined;
      let image: string | null = null;
      let price: number = 0;
      try {
        const product = await this.productServices.findOne(prodId);
        if (product) {
          if (product.slugs_url) slugs_url = product.slugs_url;
          image = product.image ?? null;
          price = typeof product.price === 'number' ? product.price : 0;
        }
      } catch (e) {
        // Si no se encuentra el producto, ignorar el error
      }
      const profits = Number((data.qty * price).toFixed(2));
      if (data.qty < lowThreshold) {
        lowSelling.push({
          prodId,
          qty: data.qty,
          profits,
          name: data.name,
          category: data.category,
          slugs_url,
          image
        });
      } else if (data.qty >= highThreshold) {
        highSelling.push({
          prodId,
          qty: data.qty,
          profits,
          name: data.name,
          category: data.category,
          slugs_url,
          image
        });
      }
    }

    // Ordenar por cantidad descendente
    lowSelling = lowSelling.sort((a, b) => b.qty - a.qty);
    highSelling = highSelling.sort((a, b) => b.qty - a.qty);

    // Paginación y límite
    const applyPagination = (arr: any[]) => {
      if (limit === 'all') return arr;
      const pageNum = page && page > 0 ? page : 1;
      const lim = typeof limit === 'number' && limit > 0 ? limit : 30;
      const start = (pageNum - 1) * lim;
      return arr.slice(start, start + lim);
    };

    const paginatedLowSelling = applyPagination(lowSelling);

    const paginatedHighSelling = applyPagination(highSelling);

    // Calcular totales vendidos en la página actual
    const totalLowSoldPage = paginatedLowSelling.reduce(
      (acc, item) => acc + item.profits,
      0
    );
    const totalHighSoldPage = paginatedHighSelling.reduce(
      (acc, item) => acc + item.profits,
      0
    );

    // Agregar porcentaje a cada producto
    const paginatedLowSellingWithPercent = paginatedLowSelling.map((item) => ({
      ...item,
      percentage:
        totalLowSoldPage > 0
          ? Number(((item.profits / totalLowSoldPage) * 100).toFixed(2))
          : 0
    }));
    const paginatedHighSellingWithPercent = paginatedHighSelling.map(
      (item) => ({
        ...item,
        percentage:
          totalHighSoldPage > 0
            ? Number(((item.profits / totalHighSoldPage) * 100).toFixed(2))
            : 0
      })
    );

    return {
      lowSelling: paginatedLowSellingWithPercent,
      highSelling: paginatedHighSellingWithPercent,
      totalLowSelling: lowSelling.length,
      totalHighSelling: highSelling.length,
      page,
      limit
    };
  }
}
