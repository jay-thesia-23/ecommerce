import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  create(@Body() createCheckoutDto: CreateCheckoutDto) {
    return this.checkoutService.create(createCheckoutDto);
  }

  @Get()
  @Render("checkout")
  async finalOrder(){

  }

  findAll() {
    return this.checkoutService.finalOrder();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckoutDto: UpdateCheckoutDto) {
    return this.checkoutService.update(+id, updateCheckoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkoutService.remove(+id);
  }
}
