import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Crear categorías por defecto
  const defaultCategories = await Promise.all([
    prisma.categories.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Varios',
        slug_url: 'varios',
      },
    }),
    prisma.categories.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Higiene',
        slug_url: 'higiene',
      },
    }),
    prisma.categories.upsert({
      where: { id: 3 },
      update: {},
      create: {
        name: 'Lacteos',
        slug_url: 'lacteos',
      },
    }),
  ]);

  console.log('Categorías creadas:', defaultCategories);

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
      dolar: 25.0,
      useIva: true,
      autoPrice: true,
      profit: 0.3,
      roundPrice: false,
      defafult_currency: 'BS',
      expiration_default: 30,
      bundle_discount: 0.05,
    },
  });

  console.log('Configuración por defecto creada:', defaultConfig);

  // Crear algunos productos por defecto
  const defaultProducts = await prisma.products.createMany({
    data: [
      {
        name: 'Harina Pan',
        stock: 10,
        price: 1.16,
        price_ent: 0.97,
        slugs: [
          'harina',
          'harina-pan',
          'harina de maiz',
          'harina de maiz pan',
          'harina de maiz pan 1kg',
        ],
        images:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJM_sIZlwInBjU9HNNEAXCvRKkd_yBZxlm8oudjhPRg&s',
        slugs_url: 'harina-pan',
        brand: 'polar',
        unity: 'kg',
        categorie_id: 1,
        status: true,
      },
      {
        name: 'Arroz Mary Esmeralda',
        stock: 10,
        price: 2.5,
        price_ent: 1.95,
        images:
          'https://www.alimentosmary.com/wp-content/uploads/2017/08/arroz-esmeralda-alimentos-mary.jpg',
        slugs: ['Mary', 'arroz', 'arroz-esmeralda', 'esmeralda'],
        slugs_url: 'mary-arroz-esmeralda',
        brand: 'Mary',
        unity: 'kg',
        categorie_id: 1,
        status: true,
      },
      {
        name: 'leche completa natulac',
        stock: 20,
        price: 2.47,
        price_ent: 1.87,
        slugs: ['Leche compreta', 'leche', 'leche-natulac'],
        images:
          'https://costazul.sigo.com.ve/images/thumbs/0021683_leche-entera-uht-natulac-946ml_450.jpeg',
        slugs_url: 'leche-natulac',
        brand: 'natulac',
        categorie_id: 2,
        unity: 'lt',
        status: true,
      },
      {
        name: 'papel rosal plus 400h 4 rollos',
        stock: 20,
        price: 2.44,
        price_ent: 3.20,
        slugs: ['papel', 'rosal', 'rosal-plus', '400h', '4 rollos'],
        images:
          'https://caraotamarket.com/6739-large_default/papel-rosal-plus-400-hojas-4rollos.jpg',
        slugs_url: 'papel-rosal-plus',
        brand: 'rosal',
        categorie_id: 3,
        unity: 'rollos',
        status: true,
      },
      {
        name: 'Jabón (Lemon)',
        stock: 20,
        price: 0.68,
        price_ent: 0.97,
        slugs: ['jabon', 'baño', 'lemon'],
        images:
          'https://mercayahorra.com/wp-content/uploads/2020/06/Jab%C3%B2n-Lem%C3%B2n-x-130g.jpg',
        slugs_url: 'jabon-lemon',
        brand: 'lemon',
        categorie_id: 3,
        unity: 'g',
        status: true,
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
