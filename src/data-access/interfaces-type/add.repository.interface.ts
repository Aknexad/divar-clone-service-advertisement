export interface AdvertisementRepositoryInterface {
  crateAdd(data: any): Promise<void>;

  getAdd(query: any): Promise<any>;
}
