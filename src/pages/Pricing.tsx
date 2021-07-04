import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import useRecruiterInfoStore from "store/recruiterInfo";
import { splPricing, offerings } from "adPricing";
import { TypePricingData, TypeSplPricingData } from "types/TypePricingData";
import PriceCard from "components/PriceCard";

function Pricing() {
  const { data } = useRecruiterInfoStore();
  const history = useHistory();
  const handleClick = () => history.push("/pricing");
  const [offerTexts, setofferTexts] = useState("");

  useEffect(() => {
    //fetch pricing data from backend
    const sPricing: TypeSplPricingData = splPricing;
    let offerStatement = "\n\n";

    for (const customer in sPricing) {
      if (
        data?.companyName?.trim().toUpperCase() ===
        customer?.trim().toUpperCase()
      ) {
        for (const offer of sPricing[customer]) {
          console.log(offer.statement);
          offerStatement += `${offer.statement}\n`;
        }
        setofferTexts(offerStatement);
      }
    }
  }, [data?.companyName]);

  return (
    <>
      <header>Pricing</header>
      {offerTexts && (
        <div className="message">
          Hello {data?.firstName || "user"}, as a priviledged customer, we have
          the below special pricing for you:
          <strong>{offerTexts}</strong>
        </div>
      )}

      <Paper elevation={2} className="pricing-content">
        <label> Choose the ad type to best suit your needs:</label>
        <div className="pricing-card-container">
          {offerings.map((item) => {
            return (
              <PriceCard
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            );
          })}
        </div>
        <Button onClick={handleClick} variant="contained">
          Confirm selection
        </Button>
      </Paper>
    </>
  );
}

export default Pricing;
