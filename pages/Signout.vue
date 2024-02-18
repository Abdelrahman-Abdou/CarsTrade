<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
            <h2 class="text-xl font-semibold mb-4">Sign out</h2>
            <p class="text-gray-600 mb-6">Are you sure you want to sign out?</p>
            <button @click="signout"
                class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
                Sign out
            </button>
        </div>
    </div>
</template>
  
<script setup>
const supabase = useSupabaseClient()
const signout = async () => {
    const { error } = await supabase.auth.signOut()

}
</script>
  