import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { AddCartService } from './add-cart.service';
import { CreateAddCartDto } from './dto/create-add-cart.dto';
import { UpdateAddCartDto } from './dto/update-add-cart.dto';

@Controller('addcart')
export class AddCartController {
  constructor(private readonly addCartService: AddCartService) {}

  @Post()
  create(@Body() createAddCartDto: CreateAddCartDto) {
    return this.addCartService.create(createAddCartDto);
  }

  @Get()
  @Render("addToCart")
  renderCart(){

  }
  @Get("index")
  findAll() {
    return this.addCartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addCartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddCartDto: UpdateAddCartDto) {
    return this.addCartService.update(+id, updateAddCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addCartService.remove(+id);
  }
}
