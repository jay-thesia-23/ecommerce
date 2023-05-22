import { destination, editFileName, imageFileFilter } from './middleware/fileFilters.middleware';
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
  Req,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";


@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @Render("product")
  async productRender() {
    const cate = await this.findAllCategory();
    const subCate = await this.findAllSubCategory(1);

 
    

    return { cate, subCate };
  }



  @Get("category")
  async findAllCategory() {
    const getCategory = await this.productsService.findAllCategory();

    return getCategory;
  }

  @Get("subcategory")
  async findAllSubCategory(@Query("id") id:number) {
    console.log(id, "requenst");

    const getsubCategory = await this.productsService.findAllSubCategory(+id);

    console.log(getsubCategory, "insidef n all subcate");

    return getsubCategory;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Post()
  @UseInterceptors(FileInterceptor("productImage",{
      storage:diskStorage({
        destination:destination,
        filename:editFileName
      }),
      fileFilter:imageFileFilter
  }))
  create(@UploadedFile() file:Express.Multer.File,@Req() req) {

    console.log(file);
    console.log(req.body);
    
    return this.productsService.create(req,file);
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
