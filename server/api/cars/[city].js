import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (e) => {
  const { make, minPrice, maxPrice } = getQuery(e);
  const { city } = e.context.params;
  const filters = {
    city: city.toLocaleLowerCase(),
  };
  if (make) {
    filters.make = make.toLocaleLowerCase();
  }
  if (minPrice || maxPrice) {
    filters.price = {};
  }
  if (minPrice) {
    filters.price.gte = parseInt(minPrice);
  }
  if (maxPrice) {
    filters.price.lte = parseInt(maxPrice);
  }
  const cars = await prisma.car.findMany({
    where: filters,
    select: {
      id: true,
      make: true,
      model: true,
      price: true,
      image: true,
    },
    orderBy: {
      price: "asc",
    },
    take: 10,
    skip: 0,
  });
  return cars;
});
