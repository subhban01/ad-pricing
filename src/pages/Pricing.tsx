import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import useRecruiterInfoStore from "store/recruiterInfo";
import usecheckoutDataStore from "store/checkoutDataStore";
import { splPricing, offerings } from "adPricing";
import { TypeSplPricingData } from "types/TypePricingData";
import PriceCard from "components/PriceCard";
import { useHistory } from "react-router-dom";

function Pricing() {
  const { data, setApplicableOffers } = useRecruiterInfoStore();
  const { setCheckoutData } = usecheckoutDataStore();
  const [offerTexts, setofferTexts] = useState("");
  const [checkoutArray, setCheckoutArray] = useState<string[][]>();
  const history = useHistory();

  useEffect(() => {
    //fetch pricing data from backend
    const sPricing: TypeSplPricingData = splPricing;
    let offerStatement = "\n\n";

    for (const customer in sPricing) {
      if (
        data?.companyName
          ?.toUpperCase()
          .replace(/ /g, "")
          .includes(customer?.trim().toUpperCase())
      ) {
        setApplicableOffers(sPricing[customer]);
        for (const offer of sPricing[customer]) {
          offerStatement += `${offer.statement}\n`;
        }
        setofferTexts(offerStatement);
      }
    }
  }, [data?.companyName, setApplicableOffers]);

  const handleChange = (itemCode: string, count: number) => {
    let result = checkoutArray ?? [];
    let arr = [];
    while (count > 0) {
      arr.push(itemCode);
      count--;
    }

    for (let i = 0; i < offerings.length; i++) {
      switch (itemCode) {
        case offerings[i].code:
          result[i] = arr;
          break;
      }
    }

    setCheckoutArray(result);
    setCheckoutData(result);
  };

  function handleClick() {
    history.push("/checkout");
  }

  return (
    <>
      <header>Pricing</header>
      {offerTexts && (
        <div className="message">
          Hello {data?.firstName || "user"}, as a priviledged customer, we have
          the below special pricing for you:
          <strong>{`${offerTexts}\n`}</strong>
          [Final price will be shown in checkout section after you confirm
          selection]
        </div>
      )}

      <Paper elevation={2} className="paper">
        <label> Choose the ad type to best suit your needs:</label>
        <div className="pricing-card-container">
          {offerings.map((item, index) => {
            return (
              <PriceCard
                key={`${item.price}${index}`}
                title={item.title}
                desc={item.desc}
                price={item.price}
                handleChange={(count: number) => handleChange(item.code, count)}
              />
            );
          })}
        </div>
        <Button variant="contained" onClick={handleClick}>
          Checkout
        </Button>
      </Paper>
    </>
  );
}

export default Pricing;
