import React, { useRef } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

interface TypeProps {
  title: string;
  desc: string;
  price: number;
  handleChange: Function;
}

function PriceCard(props: TypeProps) {
  const countRef = useRef<HTMLInputElement>();

  const handleChange = () => {
    props.handleChange(countRef.current?.value);
  };

  return (
    <Card className="price-card">
      <h2>{props.title}</h2>
      <div>{props.desc}</div>
      <div>
        <strong>${props.price}</strong>
      </div>
      <div>
        <TextField
          className="count"
          label="Count"
          inputRef={countRef}
          onChange={handleChange}
        />
      </div>
    </Card>
  );
}

export default PriceCard;
