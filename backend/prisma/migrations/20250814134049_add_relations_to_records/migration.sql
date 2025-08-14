-- AlterTable
ALTER TABLE "Records" ADD COLUMN     "blacklist_id" INTEGER,
ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_blacklist_id_fkey" FOREIGN KEY ("blacklist_id") REFERENCES "black_list"("id") ON DELETE SET NULL ON UPDATE CASCADE;
