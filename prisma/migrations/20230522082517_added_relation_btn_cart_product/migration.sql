/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `addCarts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `productDesc` TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `addCarts_productId_key` ON `addCarts`(`productId`);

-- AddForeignKey
ALTER TABLE `addCarts` ADD CONSTRAINT `addCarts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
