import { prisma } from "@/lib/prisma";
import type {
  CreateWishDTO,
  UpdateWishDTO,
} from "../validators/wish.validator";

export const WishService = {
  async getAll() {
    const wish = await prisma.wish.findMany({});

    return wish;
  },
  async getById(id: number) {
    const wish = await prisma.wish.findUnique({
      where: { id },
    });

    return wish;
  },

  async create(data: CreateWishDTO) {
    return await prisma.wish.create({
      data: {
        name: data.name,
        message: data.message,
      },
    });
  },

  async update(id: number, data: UpdateWishDTO) {
    return prisma.wish.update({ where: { id }, data });
  },

  async delete(id: number) {
    return prisma.wish.delete({ where: { id } });
  },
};
