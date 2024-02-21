import HttpFactory from "../factory";

class carModule extends HttpFactory {
  Resource = "/car";

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
export default carModule;