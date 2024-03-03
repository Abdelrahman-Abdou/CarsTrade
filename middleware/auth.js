export default defineNuxtRouteMiddleware(async ({ to, from }) => {
  const user = useSupabaseUser();
  console.log(user.value, 'user');
  if (!user.value) {
    return navigateTo("/login");
  } else {
    return;
  }
});
