<script setup>
import axios from 'axios';

const route = useRoute()
const city = route.params.city
const { $api } = useNuxtApp()

const { data: cars, error } = useAsyncData("fetchCars", async () => {
  let params = {
    minPrice: route.query?.minPrice,
    maxPrice: route.query?.maxPrice,
    make: route.params?.make
  }
  const res = await $api.cars.fetchData(city, params)
  return res

}, {
  watch: [() => (route.query?.minPrice),

  () => route.query?.maxPrice, () => route.params?.make]
}
);

</script>

<template>
  <div>
    <CarCards :cars="cars" />
  </div>
</template>
