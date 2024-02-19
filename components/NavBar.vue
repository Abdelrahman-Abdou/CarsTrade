<script setup>


const user = useSupabaseUser()

</script>
<template>
  <header class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
    ">
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">
        <span>Listings</span>
      </NuxtLink>
      <NuxtLink class="cursor-pointer" to="/signout">logout</NuxtLink>

    </div>
    <NuxtLink v-else to="/login"> login</NuxtLink>
  </header>
</template>