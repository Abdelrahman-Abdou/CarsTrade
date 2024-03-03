<script setup>

const route = useRoute()
const city = route.params.city
const { $api } = useNuxtApp()
const { data: cars } = useAsyncData('fetchCars', async () => {
  let params = {}
  if (route.query?.minPrice) {
    params.minPrice = route.query.minPrice
  }
  if (route.query?.maxPrice) {
    params.maxPrice = route.query.maxPrice
  }
  if (route.params?.make) {
    params.make = route.params.make
  }
  const res = await $api.cars.fetchData(city, params)
  return res

}, {
  watch: [() => route]
})

</script>

<template>
  <div>
    <CarCards :cars="cars" />
  </div>
</template>
