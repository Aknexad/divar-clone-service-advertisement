import { AdvertisementRepositoryInterface } from '../interfaces-type/add.repository.interface';

class AdvertisementRepository implements AdvertisementRepositoryInterface {
  constructor() {}

  async crateAdd(data: any): Promise<void> {
    return;
  }

  async getAdd(query: any): Promise<any> {
    return;
  }
}

export default AdvertisementRepository;
