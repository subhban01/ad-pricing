import { TypeSplPricingData } from "./TypePricingData";

export default interface TypeRecruiterData {
  firstName: string;
  lastName: string;
  companyName: string;
  applicableOffers?: TypeSplPricingData;
}
