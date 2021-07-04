import useRecruiterInfo from "store/recruiterInfo";
import useCheckoutDataStore from "store/checkoutDataStore";
import { offerings } from "adPricing";

export default function calculateTotal(): number {
  const checkoutData = useCheckoutDataStore.getState().data;
  const appliedOffers = useRecruiterInfo.getState().offers;
  let total = 0;

  if (checkoutData) {
    let addedItems: string[] = [];
    for (const itemList of checkoutData) {
      addedItems = itemList ? addedItems.concat(itemList) : addedItems;
    }

    let priceObj: { [key: string]: number } = {};
    for (const offer of offerings) {
      priceObj[offer.code] = offer.price;
    }

    if (appliedOffers) {
      let addedItemsString = addedItems.toString();

      for (const offer of appliedOffers) {
        const offerString = offer.splOffer.toString();
        const regex = new RegExp(offerString, "g");
        addedItemsString = addedItemsString.replace(
          regex,
          offer.splPrice.toString()
        );
      }

      for (const item of Object.keys(priceObj)) {
        addedItemsString = addedItemsString.replace(
          new RegExp(item, "g"),
          priceObj[item].toString()
        );
      }
      addedItemsString.split(",").forEach((price) => {
        total += parseFloat(price);
      });
    } else {
      for (const item of addedItems) {
        total += priceObj[item];
      }
    }
  }
  return Number(total.toFixed(2));
}
