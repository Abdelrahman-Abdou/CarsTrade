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
  async fetchUserListings(params: any): Promise<{ data: any }> {
    console.log("fetchUserListings", params);
    return await this.call({
      url: `${this.Resource}/listings/user/${params.listerId}`,
      options: {
        method: "GET",
      },
    });
  }
  async deleteListing(params: any): Promise<{ data: any }> {
    console.log("fetchUserListings", params);
    return await this.call({
      url: `${this.Resource}/listings/${params.listingId}`,
      options: {
        method: "DELETE",
      },
    });
  }
  async AddListing(params: any): Promise<{ data: any }> {
    return await this.call({
      url: `${this.Resource}/listings`,
      options: {
        method: "POST",
        body: params,
      },
    });
  }
  async AddMessage(params: any): Promise<{ data: any }> {
    return await this.call({
      url: `${this.Resource}/listings/${params.listingId}/message`,
      options: {
        method: "POST",
        body: params,
      },
    });
  }
  async getCarMessages(params: any): Promise<{ data: any }> {
    return await this.call({
      url: `${this.Resource}/listings/${params.listingId}/message`,
      options: {
        method: "GET",
      },
    });
  }
}
export default carModule;
