import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Definir el tipo para las categorías
interface Category {
  id: number;
  name: string;
  slug_url: string;
  createdAt: Date;
  updatedAt: Date;
}

async function main() {
  // Crear algunas categorías por defecto
  await prisma.categories.deleteMany({}); // Limpiar categorías existentes
  
  const categoriesToCreate = [
    { name: 'Higiene', slug_url: 'higiene' },
    { name: 'Lacteos', slug_url: 'lacteos' },
    { name: 'Granos', slug_url: 'granos' },
    { name: 'Enlatados', slug_url: 'enlatados' },
    { name: 'Carnes', slug_url: 'carnes' },
    { name: 'Frutas', slug_url: 'frutas' },
    { name: 'Verduras', slug_url: 'verduras' },
    { name: 'Bebidas', slug_url: 'bebidas' },
    { name: 'Limpieza', slug_url: 'limpieza' },
    { name: 'Otros', slug_url: 'varios' },
  ];

  // Crear categorías una por una para obtener sus IDs
  const createdCategories: Category[] = [];
  for (const category of categoriesToCreate) {
    const created = await prisma.categories.create({
      data: category
    });
    createdCategories.push(created as Category);
  }

  console.log('Categorías creadas:', createdCategories);
  
  // Obtener el ID de la categoría por defecto (varios)
  const defaultCategory = createdCategories.find(c => c.slug_url === 'varios');
  if (!defaultCategory) {
    throw new Error('No se pudo encontrar la categoría por defecto');
  }
  const defaultCategoryId = defaultCategory.id;

  // Crear un usuario por defecto
  const defaultUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'securepassword',
      avatar: `/public/profile.jpg`,
    },
  });

  console.log('Usuario por defecto creado:', defaultUser);

  // Crear una configuración por defecto
  const defaultConfig = await prisma.config.upsert({
    where: { id: 1 },
    update: {},
    create: {
      dolar: 93,
      useIva: true,
      autoPrice: true,
      profit: 0.3,
      roundPrice: false,
      default_currency: 'BS',
      expiration_default: 30,
      bundle_discount: 0.05,
    },
  });

  console.log('Configuración por defecto creada:', defaultConfig);

  const defaultSuppliers = [
    {
      name: 'Muchi',
      company: 'Muchi',
      email: 'info@muchi.com',
      phone: '0414-1234567',
      credit_days: 15,
    },
    {
      name: 'Polar',
      company: 'Polar',
      email: 'info@polar.com',
      phone: '0414-1234567',
      credit_days: 15,
    },
    {
      name: 'Coca-Cola',
      company: 'Coca-Cola',
      email: 'info@coca-col.com',
      phone: '0414-1234567',
      credit_days: 3,
    },
    {
      name: 'Lactalis',
      company: 'Lactalis',
      credit_days: 30,
      email: 'info@lactalis.com',
      phone: '0414-1234567',
    },
    {
      name: 'Rammy',
      company: 'Mercado viejo',
      credit_days: 0,
      email: 'info@mercado-viejo.com',
      phone: '0414-1234567',
    },
  ];

  await prisma.suppliers.createMany({
    data: defaultSuppliers,
  });

  console.log('Suppliers por defecto creados:', defaultSuppliers);

  // Crear algunos productos por defecto
  await prisma.products.deleteMany({}); // Limpiar productos existentes
  
  const defaultProducts = await prisma.products.createMany({
    data: [
      {
        name: 'Harina PAN',
        stock: 100,
        price: 3.5,
        price_ent: 2.5,
        slugs: [
          'harina',
          'harina de maiz',
          'harina pan',
          'harina de maiz pan',
          'harina de maiz pan 1kg',
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJM_sIZlwInBjU9HNNEAXCvRKkd_yBZxlm8oudjhPRg&s',
        slugs_url: 'harina-pan',
        brand: 'polar',
        unity: 'kg',
        categorie_id: defaultCategoryId,
        status: true
      },
      {
        name: 'Arroz Mary Esmeralda',
        stock: 10,
        price: 2.5,
        price_ent: 1.95,
        image:
          'https://www.alimentosmary.com/wp-content/uploads/2017/08/arroz-esmeralda-alimentos-mary.jpg',
        slugs: ['Mary', 'arroz', 'arroz-esmeralda', 'esmeralda'],
        slugs_url: 'mary-arroz-esmeralda',
        brand: 'Mary',
        unity: 'kg',
        categorie_id: 1,
      },
      {
        name: 'leche completa natulac',
        stock: 20,
        price: 2.47,
        price_ent: 1.87,
        slugs: ['Leche compreta', 'leche', 'leche-natulac'],
        image:
          'https://costazul.sigo.com.ve/images/thumbs/0021683_leche-entera-uht-natulac-946ml_450.jpeg',
        slugs_url: 'leche-natulac',
        brand: 'natulac',
        categorie_id: 3,
        unity: 'lt',
      },
      {
        name: 'papel rosal plus 400h 4 rollos',
        stock: 20,
        price: 2.44,
        price_ent: 3.20,
        slugs: ['papel', 'rosal', 'rosal-plus', '400h', '4 rollos'],
        image:
          'https://caraotamarket.com/6739-large_default/papel-rosal-plus-400-hojas-4rollos.jpg',
        slugs_url: 'papel-rosal-plus',
        brand: 'rosal',
        categorie_id: 2,
        unity: 'rollos',
      },
      {
        name: 'Jabón (Lemon)',
        stock: 20,
        price: 0.68,
        price_ent: 0.97,
        slugs: ['jabon', 'baño', 'lemon'],
        image:
          'https://mercayahorra.com/wp-content/uploads/2020/06/Jab%C3%B2n-Lem%C3%B2n-x-130g.jpg',
        slugs_url: 'jabon-lemon',
        brand: 'lemon',
        categorie_id: 2,
        unity: 'g',
      },
    ],
  });

  console.log('Productos por defecto creados:', defaultProducts);


}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
