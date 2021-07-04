import useRecruiterInfo from "store/recruiterInfo";
import useCheckoutDataStore from "store/checkoutDataStore";

export default function calculateTotal(): number {
  const checkoutData = useCheckoutDataStore.getState().data;
  const appliedOffers = useRecruiterInfo.getState().offers;

  return 0;
}
