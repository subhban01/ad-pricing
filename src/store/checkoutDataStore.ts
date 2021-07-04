import create from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  data: string[][] | null;
  setCheckoutData: (data: string[][]) => void;
};

const useCheckoutDataStore = create<State>(
  devtools(
    (set, get) => ({
      data: null,
      setCheckoutData: (data: string[][]): void => set({ data }),
    }),
    "checkoutData"
  )
);

export default useCheckoutDataStore;
