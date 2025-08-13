/*
  Warnings:

  - You are about to drop the column `slugs_url` on the `Products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug_url]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug_url` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Records" DROP CONSTRAINT "Records_black_list_user_id_fkey";

-- DropIndex
DROP INDEX "Products_slugs_url_key";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "slugs_url",
ADD COLUMN     "slug_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "black_list" ADD COLUMN     "Records" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Products_slug_url_key" ON "Products"("slug_url");
