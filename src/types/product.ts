import { PriceGroup } from './price_group';

export interface Product{
    image_product: string,
    price_group: PriceGroup,
    product_name: string,
    id: Number
}