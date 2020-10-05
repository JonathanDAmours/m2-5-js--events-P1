const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  // add more tests here...
  expect(getDaysInMonth("January")).toBe(31);
  expect(getDaysInMonth("February")).toBe(28);
  expect(getDaysInMonth("March")).toBe(31);
  expect(getDaysInMonth("April")).toBe(30);
  expect(getDaysInMonth("May")).toBe(31);
  expect(getDaysInMonth("June")).toBe(30);
  expect(getDaysInMonth("July")).toBe(31);
  expect(getDaysInMonth("August")).toBe(31);
  expect(getDaysInMonth("September")).toBe(30);
  expect(getDaysInMonth("October")).toBe(31);
  expect(getDaysInMonth("December")).toBe(31);
});
