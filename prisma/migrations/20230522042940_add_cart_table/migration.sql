/*
  Warnings:

  - You are about to drop the `AddCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `roleId` INTEGER NOT NULL DEFAULT 2;

-- DropTable
DROP TABLE `AddCart`;

-- CreateTable
CREATE TABLE `addCarts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `productQuantity` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
