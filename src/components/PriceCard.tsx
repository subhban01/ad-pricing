import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
      <div>
        <TextField className="count" label="Count" />
        <Button variant="contained">Add to cart</Button>
      </div>
    </Card>
  );
}

export default PriceCard;
