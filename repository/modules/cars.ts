import HttpFactory from "../factory";

class carsModule extends HttpFactory {
  Resource = "/cars";

  async fetchData(city: any, params?: any): Promise<any> {
    return await this.call({
      url: `${this.Resource}/${city}`,
      options: {
        method: "GET",
        params: {
          ...params,
        },
      },
    });
  }
 
}

export default carsModule;
