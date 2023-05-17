import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Query,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { request, response } from "express";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @Render("product")
  async productRender() {
    const cate = await this.findAllCategory();
    const subCate = await this.findAllSubCategory('1');

    return { cate, subCate };
  }

  @Get("category")
  async findAllCategory() {
    const getCategory = await this.productsService.findAllCategory();

    return getCategory;
  }

  @Get("subcategory")
  async findAllSubCategory(@Query() id: string) {
    console.log(id, "requenst");

    const getsubCategory = await this.productsService.findAllSubCategory(+id);

    console.log(getsubCategory, "insidef n all subcate");

    return getsubCategory;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
