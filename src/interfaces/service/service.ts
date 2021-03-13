import { IServicePrice } from "./service-price";

export interface IService {
  serviceId: number;
  name: string;
  discountRateText?: string;
  price: IServicePrice;
}
