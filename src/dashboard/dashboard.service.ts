import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardService {

  constructor(private prisma:PrismaService){}


  async findAllProducts(){

    let getAllProducts=this.prisma.product.findMany()
    return getAllProducts
    
  }

  async addCart(req){

    console.log(req.body,"inside service");

    let productId=Number(req.body.productId)
    let addToDbCart=this.prisma.addCart.upsert({
      where:{
        productId

      },
      update:{
        productQuantity:{
          increment:1
        }
      },
      create:{
        productId,
        userId:1
      }
    })

    console.log(addToDbCart,"after service");
    
    
    return addToDbCart
  }



  create(createDashboardDto: CreateDashboardDto) {}

  findAll() {
    return `This action returns all dashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
