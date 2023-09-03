import { AdvertisementRepositoryInterface } from '../interfaces-type/add.repository.interface';

class AdvertisementRepository implements AdvertisementRepositoryInterface {
  constructor() {}

  async carateAdverts(data: any): Promise<void> {
    return;
  }

  async getAdverts(query: any): Promise<any> {
    return;
  }

  async getAdvertById(id: string) {
    return null;
  }
}

export default AdvertisementRepository;
