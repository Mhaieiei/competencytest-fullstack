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
  expect(sum("0", "0")).toEqual("0");
  expect(sum("5", "5")).toEqual("10");
  expect(sum("2", "3")).toEqual("5");
  expect(sum("20", "30")).toEqual("50");
});

test("Sum handle input string negative", () => {
  expect(sum("-5", "-2")).toEqual("-7");
  expect(sum("-20", "-5")).toEqual("-25");
  expect(sum("-10", "-4")).toEqual("-14");
});

const validationTestCases = [
  [[], {}, "Cannot parse argument as number"],
  [[], [], "Cannot parse argument as number"],
  [{}, [], "Cannot parse argument as number"],
  [{}, {}, "Cannot parse argument as number"],
  [0, [], "Cannot parse argument as number"],
  [[], 0, "Cannot parse argument as number"],
  [0, {}, "Cannot parse argument as number"],
  [{}, 0, "Cannot parse argument as number"],
  [0, '0', "Expected argument to be a string"],
  ['0', 0, "Expected argument to be a string"],
  [true, false, "Cannot parse boolean as number"],
  [false, true, "Cannot parse boolean as number"],
  [true, true, "Cannot parse boolean as number"],
  [false, false, "Cannot parse boolean as number"],
  ["2 4", "2", "String cannot be reliably parsed to number"],
  ["2", "2 4", "String cannot be reliably parsed to number"],
];

describe.each(validationTestCases)('Validating sum(%s, %s)', (param1, param2, errorMessage) => {
  test(`throws ${errorMessage}`, () => {
    expect(() => sum(param1, param2)).toThrowError(errorMessage);
  });
})
