import { PrismaService } from './../prisma.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res, Req, Put } from '@nestjs/common';
import { AdminPanelService } from './admin-panel.service';
import { CreateAdminPanelDto } from './dto/create-admin-panel.dto';
import { UpdateAdminPanelDto } from './dto/update-admin-panel.dto';
import { Request, Response } from 'express';

@Controller('adminPanel')
export class AdminPanelController {
  constructor(private readonly adminPanelService: AdminPanelService,private prisma:PrismaService) {}

  @Post()
  create(@Body() createAdminPanelDto: CreateAdminPanelDto) {
    return this.adminPanelService.create(createAdminPanelDto);
  }

  @Get()
  @Render("adminUser")
  async showUsersPage(){
    let getUser=await this.adminPanelService.findAll()
    
    return {data:getUser}
  }

  // @Get("getdata")
  // async findAll(@Res() res:Response,@Req() req:Request) {

  //   // const { draw, search, order, start, length } = req.query;
  //   // console.log(draw, start, order, length);
    
  //   // let getUser=await this.adminPanelService.findAll()
    
  //   // return {data:getUser}
  // }

  @Post("deleteUser")
  async deleteUser(@Req() req:Request){
    console.log(req.body,"id of dleete");
    
    const deleted=await this.adminPanelService.deleteUser(+req.body.userId)

    console.log(deleted,"level controller ");
    
    return deleted
  }

  @Put("editUser")
  async editUser(@Req() req:Request){
    console.log(req.body,"edit user contro");

    const edit=await this.adminPanelService.editUser(+req.body.userId)

    return edit
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminPanelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminPanelDto: UpdateAdminPanelDto) {
    return this.adminPanelService.update(+id, updateAdminPanelDto);
  }

  
}
