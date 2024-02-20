import type { $Fetch, FetchOptions, FetchError } from "ofetch";
import { toast } from "vue3-toastify";
interface HttpFactoryParams {
  url: RequestInfo;
  options: FetchOptions<"json">;
}

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }


  async call<T>(
    params: HttpFactoryParams,
    showToasts: boolean = true
  ): Promise<T> {
    // const { $toast } = useNuxtApp();

    try {
      const $res = await this.$fetch(params.url, {
        ...params.options,
        ...(params.options.method === "GET" && {
          params: {
            ...params.options.params,
          },
        }),
      });

      return $res;
    } catch (err: unknown) {
      const ofetchError = err as FetchError;

      if (!ofetchError.data) {
        toast.error("Network error");

        throw new Error("Network error");
      }

      if (ofetchError.statusCode === 419) {
        toast.error("Session expired");

      }
      const errors = ofetchError.data.errors;

      if (!showToasts) {
        throw new Error(errors);
      }

      toast.error('something went so wrong');

      throw new Error(errors);
    }
  }
}
export default HttpFactory;
