<script setup>
import axios from 'axios';

const route = useRoute()
const city = route.params.city
// , {
// 
// }
// const { data, error } =  useAsyncData("fetchCars", async () => {
//   const res = await axios.get(`/api/cars/${city}`);
//   return res

// }
// );
const cars = ref([])
const getCars = async () => {
  const res = await axios.get(`/api/cars/${city}`, {
    params: {
      minPrice: route.query.minPrice,
      maxPrice: route.query.maxPrice,
      make: route.params.make
    },

  });
  cars.value = res.data
  return res.data
}
getCars()
</script>

<template>
  <div>
    <CarCards :cars="cars" />
  </div>
</template>
