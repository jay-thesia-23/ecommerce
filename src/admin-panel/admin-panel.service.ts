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
      select: {
        password: false,
        updatedAt: false,
        createdAt: false,
        id: true,
        name: true,
        email: true,
        roleId: true,
        deleted: true,
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

  remove(id: number) {
    return `This action removes a #${id} adminPanel`;
  }
}