import { Injectable, Delete } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateAdminPanelDto } from "./dto/create-admin-panel.dto";
import { UpdateAdminPanelDto } from "./dto/update-admin-panel.dto";

@Injectable()
export class AdminPanelService {
  constructor(private prisma: PrismaService) {}

  create(createAdminPanelDto: CreateAdminPanelDto) {
    return "This action adds a new adminPanel";
  }

  async findAll() {
    let users = await this.prisma.user.findMany({
      where:{
        deleted:false
      },
      select: {
        password: false,
        updatedAt: false,
        createdAt: false,
        id: true,
        name: true,
        email: true,
        roleId: true,
    
      },
    });

    console.log(users, "adminpanel user getdata");
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminPanel`;
  }

  update(id: number, updateAdminPanelDto: UpdateAdminPanelDto) {
    return `This action updates a #${id} adminPanel`;
  }

  async deleteUser(userId){

    console.log(userId,"service id");
    
    const data =await this.prisma.user.update({
      where:{
        id:(userId)
      },
      data: {
        deleted:true,
      },
    })

    return data;
  }

  async editUser(userId){

//     const update=await this.prisma.user.update({
//       where:{
//         id:userId
//       },
//       select:{
//         ...
//       }
//     })
  }
}
