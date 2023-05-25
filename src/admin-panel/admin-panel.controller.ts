import { PrismaService } from './../prisma.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res, Req } from '@nestjs/common';
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
  root(){

  }

  @Get("getdata")
  async findAll(@Res() res:Response,@Req() req:Request) {

    const { draw, search, order, start, length } = req.query;
    console.log(draw, start, order, length);
    
    let getUser=await this.adminPanelService.findAll()
    
    res.json({data:getUser})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminPanelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminPanelDto: UpdateAdminPanelDto) {
    return this.adminPanelService.update(+id, updateAdminPanelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminPanelService.remove(+id);
  }
}
