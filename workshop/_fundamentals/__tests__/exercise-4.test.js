const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { name: "chris", age: 97 },
        { name: "liv", age: 13 },
        { name: "dave", age: 41 },
      ],
      "age"
    )
  ).toStrictEqual([97, 13, 41]);

  expect(
    getValues(
      [
        { name: "Robert", age: 23 },
        { name: "Stanley", age: 36 },
        { name: "Jim", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["Robert", "Stanley", "Jim"]);

  expect(
    getValues(
      [
        { name: "joe", age: 23 },
        { name: "lili", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["joe", "lili", "dave"]);
});
