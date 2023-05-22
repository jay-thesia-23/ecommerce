import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProductDto {

    @IsNotEmpty()
    @IsNumber()
    categoryId:number

    @IsNotEmpty()
    @IsNumber()
    subCategoryId:number
    
    @IsNotEmpty()
    @IsString()
    productName:string

    @IsNotEmpty()
    @IsNumber()
    productPrice:number

    @IsNotEmpty()
    @IsString()
    productDesc:string

    @IsNotEmpty()
    @IsNumber()
    productQuantity:number

    @IsOptional()
    productImage?:string

}
