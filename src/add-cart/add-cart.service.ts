import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateAddCartDto } from "./dto/create-add-cart.dto";
import { UpdateAddCartDto } from "./dto/update-add-cart.dto";

@Injectable()
export class AddCartService {
  constructor(private prisma: PrismaService) {}
  create(createAddCartDto: CreateAddCartDto) {
    return "This action adds a new addCart";
  }

  async findAll() {
    let cart =await this.prisma.addCart.findMany({
      where:{
        productQuantity:{
          gt:0
        }
      }
     
    });

    let cartArray=[]

    for(let i=0;i<cart.length;i++){
     
      cartArray.push(cart[i].productId)
    }
    

    let productsInCart=await this.prisma.product.findMany({
      where:{
        id:{in:cartArray},
      },
     
    })
    
    return {productsInCart,cart}
    
  }

  async disCart(req){

    console.log(req.body.idCart,"service");
    
    let idCart=Number(req.body.idCart)
    let removeProduct=await this.prisma.addCart.update({
      where:{
        id:idCart
      },
      data:{
        productQuantity:{
          decrement:1
        }
      }
    })

    return removeProduct
   
  }

  findOne(id: number) {
    return `This action returns a #${id} addCart`;
  }

  update(id: number, updateAddCartDto: UpdateAddCartDto) {
    return `This action updates a #${id} addCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} addCart`;
  }
}
