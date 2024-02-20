import cars from "@/data/cars.json";

export default defineEventHandler((e) => {
  const id = e.context.params.car
  console.log(id, 'from server')
  const car = cars.find((c) => c.id === parseInt(id));
  if (!car) {
    throw new createError({
      statusCode: 404,
      message: "Car not found",
    })
  }
  console.log(car)
  return car;
});
