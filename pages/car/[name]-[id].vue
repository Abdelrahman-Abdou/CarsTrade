<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
  title: toTitleCase(route.params.name),
});
const {$api} = useNuxtApp()
const { data: details } = useAsyncData("fetchDetails", async () => {
  const res = await $api.car.fetchSingleData(route.params.id)
  console.log(res)
  return res
},
{
  watch:[() => route.params.id],
  immediate:true
}

);

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div v-if="details">
    <CarDetailHero :car="details" />
    <CarDetailAttributes :features="details.features" />
    <CarDetailDescription :description="details.description" />
    <CarDetailContact />
  </div>
</template>