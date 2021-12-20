const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);

  expect(total).toBe(13);
  // if (total !== 13) {
  //   throw new Error("Total tip should be 13. Got " + total);
  // }
});

test("Should convert 32 F to 0 C", () => {
  const C = fahrenheitToCelsius(32);

  expect(C).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const F = celsiusToFahrenheit(0);

  expect(F).toBe(32);
});

test("Async test demo", (done) => {
  setTimeout(() => {
    expect(1).toBe(2);
    done();
  }, 2000);
});
