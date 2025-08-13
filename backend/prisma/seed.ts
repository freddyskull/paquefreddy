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
    {
      name: 'Varios',
      slug_url: 'varios',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Helados',
      slug_url: 'helados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Refrescos',
      slug_url: 'refrescos',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chuchería',
      slug_url: 'chucheria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Limpieza',
      slug_url: 'limpieza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alcohol',
      slug_url: 'alcohol',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Panaderia',
      slug_url: 'panaderia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mamá shop',
      slug_url: 'mama-shop',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Aseo personal',
      slug_url: 'aseo-personal',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Librería',
      slug_url: 'libreria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ferretería',
      slug_url: 'ferreteria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Repuestos',
      slug_url: 'repuestos',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alimento para mascotas',
      slug_url: 'alimento-para-mascotas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Charcuteria',
      slug_url: 'charcuteria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'vinagres',
      slug_url: 'vinagres',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Grenobil',
      slug_url: 'grenobil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tecnologia',
      slug_url: 'tecnologia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'reposteria',
      slug_url: 'reposteria',
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
  const defaultCategory = createdCategories.find(
    (c) => c.slug_url === 'varios'
  );
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
      avatar: `/public/profile.jpg`
    }
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
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });

  console.log('Configuración por defecto creada:', defaultConfig);

  const defaultSuppliers = [
    {
      name: 'Muchi',
      company: 'Muchi',
      email: 'info@muchi.com',
      phone: '0414-1234567',
      credit_days: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Polar',
      company: 'Polar',
      email: 'info@polar.com',
      phone: '0414-1234567',
      credit_days: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Coca-Cola',
      company: 'Coca-Cola',
      email: 'info@coca-col.com',
      phone: '0414-1234567',
      credit_days: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lactalis',
      company: 'Lactalis',
      credit_days: 30,
      email: 'info@lactalis.com',
      phone: '0414-1234567',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rammy',
      company: 'Mercado viejo',
      credit_days: 0,
      email: 'info@mercado-viejo.com',
      phone: '0414-1234567',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  await prisma.suppliers.createMany({
    data: defaultSuppliers
  });

  console.log('Suppliers por defecto creados:', defaultSuppliers);

  
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
