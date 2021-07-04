import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CheckoutPage() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
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

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      <header>Checkout</header>
      <Paper elevation={2} className="paper">
        <Button
          onClick={handleButtonClick}
          className={success ? "success" : "pay"}
        >
          Make Payment
        </Button>
        {loading && <CircularProgress size={24} className="button-progress" />}
      </Paper>
    </>
  );
}
