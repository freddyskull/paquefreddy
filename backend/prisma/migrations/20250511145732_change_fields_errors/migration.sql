/*
  Warnings:

  - You are about to drop the column `defafult_currency` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Config" DROP COLUMN "defafult_currency",
ADD COLUMN     "default_currency" TEXT DEFAULT 'BS';

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "images",
ADD COLUMN     "image" TEXT;
