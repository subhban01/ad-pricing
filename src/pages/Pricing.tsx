import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import useRecruiterInfoStore from "store/recruiterInfo";
import { splPricing, offerings } from "adPricing";
import { TypeSplPricingData } from "types/TypePricingData";
import PriceCard from "components/PriceCard";
import Checkout from "components/Checkout";
import Button from "@material-ui/core/Button";

function Pricing() {
  const { data } = useRecruiterInfoStore();
  const history = useHistory();
  const handleNextClick = () => history.push("/pricing");
  const [offerTexts, setofferTexts] = useState("");

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
        for (const offer of sPricing[customer]) {
          offerStatement += `${offer.statement}\n`;
        }
        setofferTexts(offerStatement);
      }
    }
  }, [data?.companyName]);

  return (
    <>
      <Checkout total={100} />
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

      <Paper elevation={2} className="pricing-content">
        <label> Choose the ad type to best suit your needs:</label>
        <div className="pricing-card-container">
          {offerings.map((item, index) => {
            return (
              <PriceCard
                key={`${item.price}${index}`}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            );
          })}
        </div>
        <Button onClick={handleNextClick} variant="contained">
          Confirm selection
        </Button>
      </Paper>
    </>
  );
}

export default Pricing;
