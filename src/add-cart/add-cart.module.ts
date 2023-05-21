import { Module } from '@nestjs/common';
import { AddCartService } from './add-cart.service';
import { AddCartController } from './add-cart.controller';

@Module({
  controllers: [AddCartController],
  providers: [AddCartService]
})
export class AddCartModule {}
