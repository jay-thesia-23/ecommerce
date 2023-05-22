/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `addCarts` will be added. If there are existing duplicate values, this will fail.

*/




-- CreateTable
CREATE TABLE `addCarts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL UNIQUE,
    `productQuantity` INTEGER NOT NULL DEFAULT 1,
     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `addCarts` ADD CONSTRAINT `addCarts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
