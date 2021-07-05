import React, { useRef } from "react";
import "styles/style.scss";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import useRecruiterInfoStore from "store/recruiterInfo";

function App() {
  const history = useHistory();
  const { setRecuiterInfo } = useRecruiterInfoStore();
  const fnameRef = useRef<HTMLInputElement>();
  const lnameRef = useRef<HTMLInputElement>();
  const cnameRef = useRef<HTMLInputElement>();

  function handleClick() {
    const recruiterObj = {
      firstName: fnameRef.current?.value || "",
      lastName: lnameRef.current?.value || "",
      companyName: cnameRef.current?.value || "",
    };
    setRecuiterInfo(recruiterObj);
    history.push("/pricing");
  }

  return (
    <>
      <header>Purchase job advert</header>
      <Paper elevation={2} className="app-content">
        <label> Please enter details below:</label>
        <TextField className="text" label="First Name" inputRef={fnameRef} />
        <TextField className="text" label="Last Name" inputRef={lnameRef} />
        <TextField className="text" label="Company Name" inputRef={cnameRef} />
        <Button onClick={handleClick} variant="contained">
          Next
        </Button>
      </Paper>
    </>
  );
}

export default App;
