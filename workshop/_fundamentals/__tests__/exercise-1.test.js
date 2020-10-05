const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["bob", "builder"])).toBe(10);
  expect(letterCount(["johnny", "bravo"])).toBe(11);
  expect(letterCount(["tony", "hawk"])).toBe(8);
  expect(letterCount(["peanut", "butter"])).toBe(12);
});
