import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function superAdmin() {
  await prisma.user.create({
    data: {
      name: 'Super Admin',
      email: 'admin@gmail.com',
      password: '$2a$10$VG/INsvg9smCPU/pjgIApuVl.CYF/687YDwsjxB9y9xyew81gAAf2',
    },
  });
}

superAdmin();
