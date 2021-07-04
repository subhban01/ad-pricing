export const offerings = [
  {
    title: "Classic Ad",
    desc: "Offers the most basic level of advertisement",
    price: 269.99,
    code: "CA",
  },
  {
    title: "Stand out Ad",
    desc: "Allows advertisers to use a company logo and use a longer presentation text",
    price: 322.99,
    code: "SOA",
  },
  {
    title: "Premium Ad",
    desc: "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
    price: 394.99,
    code: "PA",
  },
];

export const companyName = {
  secondBite: "SecondBite",
  axilCoffee: "Axil Coffee Roasters",
  myer: "MYER",
};

export const splPricing = {
  secondBite: [
    {
      offer: ["CA", "CA", "CA"],
      price: 269.99 * 2,
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
      price: 322.99 * 4,
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
