<script setup>
definePageMeta({
  layout: "custom",
  middleware: ['auth']
});
const { $api } = useNuxtApp()
const route = useRoute()
const { data: messages } = useAsyncData('getMessgs', async () => {
  const params = {
    listingId: route.params.id
  }
  const res = await $api.car.getCarMessages(params)
  return res
})
</script>
<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard v-for="msg of messages" :msg="msg" />
  </div>
</template>