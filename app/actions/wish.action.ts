"use server";

import { revalidatePath } from "next/cache";
import z from "zod";
import {
  CreateWishSchema,
  UpdateWishSchema,
} from "@/server/validators/wish.validator";
import { WishService } from "@/server/services/wish.service";

export async function createWish(input: z.input<typeof CreateWishSchema>) {
  const data = CreateWishSchema.parse({
    name: input.name,
    message: input.message,
  });

  await WishService.create(data);

  revalidatePath("/");
}

export async function updateWish(
  id: number,
  input: z.input<typeof UpdateWishSchema>,
) {
  const data = UpdateWishSchema.parse(input);

  await WishService.update(id, {
    ...data,
  });

  revalidatePath("/" + id);
}
