<script setup>

const user = useSupabaseUser()
console.log(user.value)
definePageMeta({
  layout: "custom",
  middleware: ['auth']

});

const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});
const { $api } = useNuxtApp()
const onChangeInput = (data, name) => {
  info.value[name] = data;
  console.log(info.value)


};
const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "Price *",
    name: "price",
    placeholder: "10000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];
const errMessage = ref('')
const isButtonDisable = computed(() => {
  for (let key in info.value) {
    console.log(info.value[key])
    if (!info.value[key]) return true;
  }
  return false;
})
const submitNewMake = async () => {
  try {
    const res = await $api.car.AddListing({
      make: info.value.make,
      model: info.value.model,
      year: +info.value.year,
      miles: +info.value.miles,
      price: +info.value.price,
      city: info.value.city,
      numberOfSeats: +info.value.seats,
      features: [info.value.features],
      description: info.value.description,
      // image: '1111',
      listerId: user.value.id,
      name: `${info.value.make} ${info.value.model}`
    })
    if (res) {
      navigateTo("/profile/listings")
    }
  } catch (error) {
    errMessage.value = error.statusMessage
    createError({
      statusCode: 400,
      message: error.message,
    })
  }

}

</script>


<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput" />
      <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name"
        :placeholder="input.placeholder" @change-input="onChangeInput" />
      <CarAdTextarea title="Description *" name="description" placeholder="" @change-input="onChangeInput" />
      <CarAdImage @change-input="onChangeInput" />
    </div>
    <p class="text-red-300">{{ errMessage }}</p>
    <button :disabled="isButtonDisable" @click="submitNewMake" class="text-white px-6 py-3 w-full mt-2 rounded-mdب"
      :class="isButtonDisable ? 'bg-blue-200' : 'bg-blue-400 '">Submit</button>
  </div>
</template>