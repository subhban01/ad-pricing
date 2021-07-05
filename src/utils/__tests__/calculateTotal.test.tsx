import calculateTotal from "../calculateTotal";
import useRecruiterInfo from "store/recruiterInfo";
import useCheckoutDataStore from "store/checkoutDataStore";
import { splPricing } from "adPricing";

test("with default customer", () => {
  //set test data
  const testData = { data: [["CA"], ["SOA"], ["PA"]] };
  useCheckoutDataStore.setState(testData);

  expect(calculateTotal()).toBe(987.97);
});

test("with priviledged customer 1", () => {
  //set test data
  const companyName = "secondBite";
  const checkoutData = { data: [["CA", "CA", "CA"], [], ["PA"]] };
  const recruiterData = {
    data: {
      firstName: "",
      lastName: "",
      companyName: companyName,
    },
  };
  const applicableOffers = {
    offers: splPricing[companyName],
  };

  useCheckoutDataStore.setState(checkoutData);
  useRecruiterInfo.setState(recruiterData);
  useRecruiterInfo.setState(applicableOffers);

  expect(calculateTotal()).toBe(934.97);
});

test("with priviledged customer 2", () => {
  //set test data
  const companyName = "axilCoffee";
  const checkoutData = { data: [[], ["SOA", "SOA", "SOA"], ["PA"]] };
  const recruiterData = {
    data: {
      firstName: "",
      lastName: "",
      companyName: companyName,
    },
  };
  const applicableOffers = {
    offers: splPricing[companyName],
  };

  useCheckoutDataStore.setState(checkoutData);
  useRecruiterInfo.setState(recruiterData);
  useRecruiterInfo.setState(applicableOffers);

  expect(calculateTotal()).toBe(1294.96);
});

test("apply special pricing and price rest of items on retail pricing", () => {
  //set test data
  const companyName = "myer";
  const checkoutData = {
    data: [[], ["SOA", "SOA", "SOA", "SOA", "SOA", "SOA", "SOA"], ["PA", "PA"]],
  };
  const recruiterData = {
    data: {
      firstName: "",
      lastName: "",
      companyName: companyName,
    },
  };
  const applicableOffers = {
    offers: splPricing[companyName],
  };

  useCheckoutDataStore.setState(checkoutData);
  useRecruiterInfo.setState(recruiterData);
  useRecruiterInfo.setState(applicableOffers);

  expect(calculateTotal()).toBe(2717.92);
});
