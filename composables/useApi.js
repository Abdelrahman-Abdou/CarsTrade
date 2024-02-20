import { $fetch } from "ofetch";

const useApi = (request, options) => {
  const config = useRuntimeConfig();

  const fetchOptions = {
    baseURL: config.public.API_BASE_URL,

    ...options,
  };
  return $fetch(request, {
    ...fetchOptions,
    credentials: "include",
  });
};

export default useApi;
