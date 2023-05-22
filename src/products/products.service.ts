import { PrismaClient } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

import { UpdateProductDto } from './dto/update-product.dto';
const prisma = new PrismaClient()

@Injectable()
export class ProductsService {

  constructor(private prisma:PrismaService){}
  //insert the product in the database
  async create(req, file:Express.Multer.File) {

    
    console.log(req.body,"inside service");

    try {

      let categoryId=Number(req.body.categoryId)
      let subCategoryId=Number(req.body.subCategoryId)
      let productName=req.body.productName
      let productPrice=Number(req.body.productPrice)
      let productQuantity=Number(req.body.productQuantity)
      let productDesc=req.body.productDesc
      let productImage=file.filename
      
      
      const productAdd=await this.prisma.product.create({
        data:{
          productName,
          productPrice,
          productDesc,
          productQuantity,
          productImage,
          categoryId,
          subCategoryId,

        }
      })
      
      return productAdd;
    } catch (error) {
      console.log(error,"error");
      return error
      
    }

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

  async findAllProducts(){

    return 1;
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
