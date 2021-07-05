import React from "react";
import { render, screen } from "@testing-library/react";
import Pricing from "../Pricing";
import useRecruiterInfo from "store/recruiterInfo";
import { act } from "react-dom/test-utils";

test("offer is displayed", () => {
  const { unmount } = render(<Pricing />);
  const companyName = "secondBite";
  const recruiterData = {
    data: {
      firstName: "John",
      lastName: "Doe",
      companyName: companyName,
    },
  };

  act(() => {
    useRecruiterInfo.setState(recruiterData);
  });

  const childCount =
    screen.getByText("Pricing").parentElement?.childElementCount;
  expect(childCount).toBe(3);
  expect(screen.getByText("Hello John", { exact: false })).toBeInTheDocument();
  expect(screen.getByTestId("message")).toBeInTheDocument();
  unmount();
});
