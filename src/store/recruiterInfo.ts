import create from "zustand";
import { devtools } from "zustand/middleware";
import TypeRecruiterData from "types/TypeRecruiterData";
import { TypePricingData } from "types/TypePricingData";

type State = {
  data: TypeRecruiterData | null;
  offers?: TypePricingData[];
  setRecuiterInfo: (data: TypeRecruiterData) => void;
  setApplicableOffers: (offers: TypePricingData[]) => void;
};

const useRecruiterInfoStore = create<State>(
  devtools(
    (set, get) => ({
      data: null,
      setRecuiterInfo: (data: TypeRecruiterData): void => set({ data }),
      setApplicableOffers: (offers: TypePricingData[]): void => set({ offers }),
    }),
    "recruiterInfo"
  )
);

export default useRecruiterInfoStore;
