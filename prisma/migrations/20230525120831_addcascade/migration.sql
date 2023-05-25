-- DropForeignKey
ALTER TABLE `addCarts` DROP FOREIGN KEY `addCarts_userId_fkey`;

-- DropForeignKey
ALTER TABLE `checkouts` DROP FOREIGN KEY `checkouts_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user_address` DROP FOREIGN KEY `user_address_userId_fkey`;

-- AddForeignKey
ALTER TABLE `user_address` ADD CONSTRAINT `user_address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addCarts` ADD CONSTRAINT `addCarts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `checkouts` ADD CONSTRAINT `checkouts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
