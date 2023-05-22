import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Req } from '@nestjs/common';
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
  async renderCart(){
    
    const getCartAll=await this.findAll()


    let getCart=getCartAll.productsInCart
    let quantity=getCartAll.cart

    console.log(getCart,quantity,"aaal");
    
    return {getCart,quantity}
    

  }

  @Post("removeproduct")
  async disCart(@Req() req){

    console.log(req.body);
    
    const removeProduct=await this.addCartService.disCart(req)

    return removeProduct
  }



  async findAll() {
    let getAllCart=await this.addCartService.findAll();

    console.log(getAllCart,"cart insdifs");

    
    return getAllCart
    
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
