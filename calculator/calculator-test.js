it("should calculate the monthly rate correctly", function () {
  expect(
    calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 })
  ).toEqual("103.64");
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 10000.598, years: 10.5, rate: 3.77 })
  ).toEqual("96.24");
});

/// etc
