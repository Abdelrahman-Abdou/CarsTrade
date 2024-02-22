import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const listing = await prisma.car.findMany({
    where: {
      listerId: e.context.params.user,
    },
    select: {
      image: true,
      id: true,
      name: true,
      price: true,
    },
  });
  console.log(listing);
  return listing;
});
