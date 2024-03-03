import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (e) => {
  // console.log(e.context.params.listingId);
  await prisma.car.delete({
    where:{
      id: +e.context.params.listingId
    }
  })
});
