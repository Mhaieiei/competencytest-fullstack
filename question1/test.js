const sum = require("./index");

test("sum function exists", () => {
  expect(sum).toBeDefined();
});

test("Sum handles empty string as an input, should throw error parameter are empty", () => {
  expect(() => sum("", "")).toThrowError("parameter are empty");
});

test("Sum handles not number string as an input,  should throw error Cannot parse string to number", () => {
  expect(() => sum("abc", "def")).toThrowError("Cannot parse string to number");
});

test("Sum handle input string positive", () => {
  expect(sum("5", "5")).toEqual("10");
  expect(sum("2", "3")).toEqual("5");
  expect(sum("20", "30")).toEqual("50");
});

test("Sum handle input string negative", () => {
  expect(sum("-5", "-2")).toEqual("-7");
  expect(sum("-20", "-5")).toEqual("-25");
  expect(sum("-10", "-4")).toEqual("-14");
});
