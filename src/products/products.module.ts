import { PrismaClient } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService,PrismaClient]
})
export class ProductsModule {}
