const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  // add more tests here...
  expect(getPairing("sushi")).toBe("sake");
  expect(getPairing("hotdog")).toBe("pepsi");
  expect(getPairing("salad")).toBe("water");
});
