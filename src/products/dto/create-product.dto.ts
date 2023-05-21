import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProductDto {

    @IsNotEmpty()
    
    categoryId:any

    @IsNotEmpty()
    
    subCategoryId:any
    
    @IsNotEmpty()
    @IsString()
    productName:any

    @IsNotEmpty()
    @IsNumber()
    productPrice:any

    @IsNotEmpty()
    @IsString()
    productDes:any

    @IsNotEmpty()
    @IsNumber()

    productQuan:any

    @IsOptional()

    productImage?:any

}
