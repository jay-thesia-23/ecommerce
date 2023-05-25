import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { AdminPanelService } from './admin-panel.service';
import { AdminPanelController } from './admin-panel.controller';

@Module({
  controllers: [AdminPanelController],
  providers: [AdminPanelService,PrismaService]
})
export class AdminPanelModule {}
