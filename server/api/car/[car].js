import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (e) => {
  const id = e.context.params.car;
  console.log(id, "from server");
  const car = await prisma.car.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!car) {
    throw new createError({
      statusCode: 404,
      message: "Car not found",
    });
  }
  // console.log(car);
  return car;
});
