import Joi from "joi";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const schema = Joi.object({
  make: Joi.string().min(3).max(30).required(),
  model: Joi.string().min(3).max(30).required(),
  year: Joi.number()
    .optional()
    .min(1886)
    .max(new Date().getFullYear() + 1)
    .required(),
  miles: Joi.number().required().min(0),
  city: Joi.string().min(3).required(),
  numberOfSeats: Joi.number().max(1000).min(1).required(),
  features: Joi.array().items(Joi.string()).required(),
  image: Joi.string().required(),
  listerId: Joi.string().required(),
  price: Joi.number().required(),
  name: Joi.string().min(3),
  description: Joi.string().min(20).required(),
});
export default defineEventHandler(async (e) => {
  // access body
  // validate body using joi
  // save body
  const body = await readBody(e);
  const { error, value } = await schema.validate(body);
  if (error) {
    throw createError({ statusCode: 412, statusMessage: error.message });
  }
  const {
    make,
    model,
    year,
    miles,
    city,
    numberOfSeats,
    features,
    image,
    listerId,
    price,
    name,
    description,
  
  } = body;
  const car = await prisma.car.create({
    data: {
      make,
      model,
      year,
      miles,
      city,
      numberOfSeats,
      features,
      image,
      listerId,
      price,
      name,
      description,
    },
  });
  return car;
});
