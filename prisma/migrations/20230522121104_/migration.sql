/*
  Warnings:

  - Added the required column `userId` to the `addCarts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_name_key` ON `users`;

-- AlterTable
ALTER TABLE `addCarts` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `addCarts_userId_fkey` ON `addCarts`(`userId`);

-- AddForeignKey
ALTER TABLE `addCarts` ADD CONSTRAINT `addCarts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `addCarts` RENAME INDEX `productId` TO `addCarts_productId_key`;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `email` TO `users_email_key`;
