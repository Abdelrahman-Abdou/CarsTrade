import cars from "@/data/cars.json";
export default defineEventHandler((e) => {
  const { make, minPrice, maxPrice } = getQuery(e);
  const { city } = e.context.params;
  let filteredCars = cars.filter((car) => {
    return car.city.toLowerCase() === city.toLowerCase();
  });
  if (make) {
    filteredCars = filteredCars.filter((car) => {
      return car.make.toLowerCase() === make.toLowerCase();
    });
  }
  if (minPrice) {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= parseInt(minPrice);
    });
  }
  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => {
      return car.price < parseInt(maxPrice);
    });
  }
  return filteredCars;
});
