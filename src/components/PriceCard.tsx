import React from "react";
import Card from "@material-ui/core/Card";

interface TypeProps {
  title: string;
  desc: string;
  price: number;
}

function PriceCard(props: TypeProps) {
  return (
    <Card className="price-card">
      <h2>{props.title}</h2>
      <div>{props.desc}</div>
      <div>
        <strong>${props.price}</strong>
      </div>
    </Card>
  );
}

export default PriceCard;
