import cars from "@/data/cars.json";
export default defineEventHandler((e) => {
  const { make, minPrice, maxPrice } = getQuery(e);
  const { city } = e.context.params;
  const filteredCars = cars.filter((car) => {
    return car.city.toLowerCase() === city.toLowerCase();
  });
  if (make) {
    return filteredCars.filter((car) => {
      return car.make.toLowerCase() === make.toLowerCase();
    });
  }
  if (minPrice) {
    console.log("minPrice", minPrice);
    return filteredCars.filter((car) => {
      return car.price >= minPrice;
    });
  }
  if (maxPrice) {
    console.log("maxPrice", maxPrice);
    return filteredCars.filter((car) => {
      return car.price <= maxPrice;
    });
  }
  return filteredCars;
});
