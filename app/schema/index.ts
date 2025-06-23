import { z } from "zod";

export const checkoutSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: "Field can't be empty",
    })
    .trim(),
  email: z.string().email({ message: "Email is invalid" }),
  phoneNumber: z.string().min(10, { message: "10 minimum characters" }),
  address: z.string().nonempty({
    message: "Field can't be empty",
  }),
  city: z.string().nonempty({
    message: "Field can't be empty",
  }),
  zipCode: z.string().min(5, {
    message: "5 numbers minimum",
  }),
  country: z.string().nonempty({
    message: "Field can't be empty",
  }),
  eMoney: z.string().nonempty({
    message: "Field can't be empty",
  }),
  pin: z.string().min(4, { message: "Must be at least 4 numbers" }),
});

export type CheckoutSchemaProps = z.infer<typeof checkoutSchema>;
