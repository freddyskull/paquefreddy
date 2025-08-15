-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "Records" ADD COLUMN     "payment_type" TEXT;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
