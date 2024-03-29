import React, { useEffect, useState } from "react";
import { offerings } from "adPricing";

interface TypeProps {
  itemArrays: string[][] | null;
}

interface TypeStringIndexedObject {
  [key: string]: string;
}

function Summary(props: TypeProps) {
  let [productNames, setProductNames] = useState<TypeStringIndexedObject>({});

  useEffect(() => {
    let names: TypeStringIndexedObject = {};
    for (const offer of offerings) {
      names[offer.code] = offer.title;
    }
    setProductNames(names);
  }, []);

  return (
    <>
      <h2>Summary </h2>
      {props.itemArrays?.map((productArray, i) => {
        return (
          <div className="summary-item" key={`${productArray[0] + i}`}>
            {productArray.length} x {productNames[productArray[0]]}
          </div>
        );
      })}
    </>
  );
}

export default Summary;
