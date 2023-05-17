import { PrismaClient } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
const prisma = new PrismaClient()

@Injectable()
export class ProductsService {

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAllCategory() {
    const getCategory=await prisma.category.findMany({
   
    })
    return getCategory;
  }

  async findAllSubCategory(id) {
    console.log(typeof id,"currrnet");
    
    
    const getCategory=await prisma.subCategory.findMany({
      where:{
        categoryId:id
      }
    })
    return getCategory;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
