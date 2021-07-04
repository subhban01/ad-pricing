import create from "zustand";
import { devtools } from "zustand/middleware";
import TypeRecruiterData from "types/TypeRecruiterData";

type State = {
  data: TypeRecruiterData | null;
  setRecuiterInfo: (data: TypeRecruiterData) => void;
};

const useRecruiterInfoStore = create<State>(
  devtools(
    (set, get) => ({
      data: null,
      setRecuiterInfo: (data: TypeRecruiterData): void => set({ data }),
    }),
    "recruiterInfo"
  )
);

export default useRecruiterInfoStore;
