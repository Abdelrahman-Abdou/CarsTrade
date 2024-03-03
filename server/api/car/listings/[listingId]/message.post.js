import Joi from "joi";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(10).required(),
  message: Joi.string().min(20).required(),
  listingId: Joi.number().required(),
});
export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const listingId = e.context.params.listingId;
  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({ statusCode: 412, statusMessage: error.message });
  }
  const { name, email, phone, message } = body;
  const response = await prisma.message.create({
    data: {
      listingId: +listingId,
      name,
      email,
      phone,
      message
    },
  });
  return response;
  // access body
  // validate body using joi
  // save body
});
