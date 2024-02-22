<template>
  <div class="mt-10">
        <div class="flex w-[600px] justify-between">
      <input type="text" class="border p-1" placeholder="Name" v-model="name" />
      <input type="text" class="border p-1" placeholder="Email" v-model="email" />
      <input type="text" class="border p-1" placeholder="Phone" v-model="phone" />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea class="border p-1 w-full" placeholder="Message" v-model="message"></textarea>
    </div>
    <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4" @click="submitHandler">
      Submit
    </button>
  </div>
</template>
<script setup>
const route = useRoute()
const listingId = ref(route.params.id)
console.log(listingId)
const name = ref()
const email = ref()
const phone = ref()
const message = ref()

const { $api } = useNuxtApp()
const submitHandler = async () => {
  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    listingId: 4,

  }
  try {
    await $api.car.AddMessage(data)
    email.value = null
    name.value = null
    phone.value = null
    message.value = null

  } catch (error) {
    throw createError({
      statusCode: 400,
      message: error.message,
    })

  }

}


</script>