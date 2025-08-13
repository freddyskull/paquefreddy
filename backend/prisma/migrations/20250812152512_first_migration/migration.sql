-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Config" (
    "id" SERIAL NOT NULL,
    "dolar" DOUBLE PRECISION NOT NULL,
    "useIva" BOOLEAN DEFAULT false,
    "autoPrice" BOOLEAN DEFAULT true,
    "profit" DOUBLE PRECISION NOT NULL DEFAULT 0.3,
    "roundPrice" BOOLEAN DEFAULT false,
    "default_categories_id" INTEGER DEFAULT 1,
    "default_categories_slug" TEXT DEFAULT 'varios',
    "threshold" INTEGER,
    "default_currency" TEXT DEFAULT 'BS',
    "expiration_default" INTEGER DEFAULT 30,
    "bundle_discount" DOUBLE PRECISION DEFAULT 0.05,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "status" BOOLEAN DEFAULT true,
    "price" DOUBLE PRECISION NOT NULL,
    "price_ent" DOUBLE PRECISION NOT NULL,
    "slugs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "slugs_url" TEXT NOT NULL,
    "image" TEXT,
    "brand" TEXT,
    "bundle" INTEGER,
    "expiration" TIMESTAMP(3),
    "unity" TEXT,
    "supplier_id" INTEGER,
    "categorie_id" INTEGER,
    "sell_unity" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purhases" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT,
    "total_purchase_amout" DOUBLE PRECISION[] DEFAULT ARRAY[]::DOUBLE PRECISION[],
    "dolar_amout" DOUBLE PRECISION,
    "date_credit" INTEGER,
    "reference" TEXT,
    "quantity" INTEGER NOT NULL,
    "status" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purhases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Records" (
    "id" SERIAL NOT NULL,
    "productList" JSONB NOT NULL,
    "dolar_price" DECIMAL(65,30) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "totals" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "black_list_user_id" INTEGER,
    "sell_without_stock" BOOLEAN DEFAULT false,

    CONSTRAINT "Records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suppliers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "credit_days" INTEGER NOT NULL DEFAULT 0,
    "company" TEXT,
    "email" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "zip" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "black_list" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "record_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "black_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductsToPurhases" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProductsToPurhases_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categories_slug_url_key" ON "Categories"("slug_url");

-- CreateIndex
CREATE UNIQUE INDEX "Products_slugs_url_key" ON "Products"("slugs_url");

-- CreateIndex
CREATE INDEX "_ProductsToPurhases_B_index" ON "_ProductsToPurhases"("B");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categorie_id_fkey" FOREIGN KEY ("categorie_id") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purhases" ADD CONSTRAINT "Purhases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_black_list_user_id_fkey" FOREIGN KEY ("black_list_user_id") REFERENCES "black_list"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToPurhases" ADD CONSTRAINT "_ProductsToPurhases_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToPurhases" ADD CONSTRAINT "_ProductsToPurhases_B_fkey" FOREIGN KEY ("B") REFERENCES "Purhases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
