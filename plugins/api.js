import { $fetch } from "ofetch";
import CarsModule from "@/repository/modules/cars";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const fetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL,
    credentials: "include",
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules = {
    cars: new CarsModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
