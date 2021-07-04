import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Summary from "components/Summary";
import usecheckoutDataStore from "store/checkoutDataStore";
import calculateTotal from "utils/calculateTotal";

export default function CheckoutPage() {
  const { data } = usecheckoutDataStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [total, setTotal] = useState(0);
  const timer = React.useRef<number>();

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setTotal(calculateTotal());
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      <header>Checkout</header>
      <Paper elevation={2} className="paper">
        <Summary itemArrays={data} />
        <h4>Total: ${total}</h4>
        <Button
          onClick={handleButtonClick}
          className={success ? "success" : "pay"}
          disabled={success}
        >
          {success ? "Done" : "Make Payment"}
        </Button>
        {loading && <CircularProgress size={24} className="button-progress" />}
      </Paper>
    </>
  );
}
