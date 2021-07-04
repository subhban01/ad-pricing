export interface TypePricingData {
  offer: string[];
  price: number;
  statement: string;
}

export interface TypeSplPricingData {
  [key: string]: TypePricingData[];
}
