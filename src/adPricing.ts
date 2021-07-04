export const retailPricing = {
  CA: 269.99,
  SOA: 322.99,
  PA: 394.99,
};

export const companyName = {
  secondBite: "SecondBite",
  axilCoffee: "Axil Coffee Roasters",
  myer: "MYER",
};

export const splPricing = {
  secondBite: [
    {
      offer: ["CA", "CA", "CA"],
      price: retailPricing.CA * 2,
      statement: "Get a 3 for 2 deal on Classic Ads",
    },
  ],
  axilCoffee: [
    {
      offer: ["SOA"],
      price: 299.99,
      statement:
        "Get a discount on Stand out Ads where the price drops to $299.99 per ad",
    },
  ],
  myer: [
    {
      offer: ["SOA", "SOA", "SOA", "SOA", "SOA"],
      price: retailPricing.SOA * 4,
      statement: "Get a 5 for 4 deal on Stand out Ads",
    },
    {
      offer: ["PA"],
      price: 389.99,
      statement:
        "Get a discount on Premium Ads where the price drops to $389.99 per ad",
    },
  ],
};
