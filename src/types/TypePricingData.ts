export interface TypePricingData {
  splOffer: string[];
  splPrice: number;
  statement: string;
}

export interface TypeSplPricingData {
  [key: string]: TypePricingData[];
}
