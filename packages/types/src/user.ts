import { z } from "zod";

export type User = {
  id: string;
  name: string;
  email: string;
};

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
});
