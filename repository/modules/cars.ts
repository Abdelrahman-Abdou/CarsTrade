import HttpFactory from "../factory";

class WarehouseModule extends HttpFactory {
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
  async fetchSingleData(id: any): Promise<{ data: any }> {
    console.log("fetchSingleData", id);
    return await this.call({
      url: `${this.Resource}/${id}`,
      options: {
        method: "GET",
       
      },
    });
  }
}

export default WarehouseModule;
