import { z } from "zod";

export const validateEmail = (email: string) => {
  const emailSchema = z.string().email();

  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
};
