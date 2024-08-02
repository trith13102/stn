import { z as zod } from "zod"

export const loginFormSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6).max(30),
})
