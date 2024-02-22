import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const listingId = e.context.params.listingId;
  console.log(listingId);
  const listings = await prisma.message.findMany({
    where: {
      listingId: +listingId,
    },
  });
  return listings;
});
