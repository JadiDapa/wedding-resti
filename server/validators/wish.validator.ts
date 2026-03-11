import { z } from "zod";

export const WishSearchSchema = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(100).default(20),
  search: z.string().min(1).max(50).optional(),
});

const WishBaseSchema = z.object({
  name: z.string().min(1),
  message: z.string().min(1),
});

export const CreateWishSchema = WishBaseSchema;

export const UpdateWishSchema = WishBaseSchema.partial();

export type CreateWishDTO = z.infer<typeof CreateWishSchema>;
export type UpdateWishDTO = z.infer<typeof UpdateWishSchema>;
