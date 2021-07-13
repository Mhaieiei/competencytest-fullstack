function sum(a, b) {
  try {
    validate(a, b);
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    if (Number.isNaN(num1) || Number.isNaN(num2))
      throw new Error("Cannot parse string to number");
    return (num1 + num2).toString();
  } catch (err) {
    throw err;
  }
}

function validate(a, b) {
  if (typeof a === "object" || typeof b === "object")
    throw new Error("Cannot parse argument as number");
  else if (typeof a === "number" || typeof b === "number")
    throw new Error("Expected argument to be a string");
  else if (typeof a === "boolean" || typeof b === "boolean")
    throw new Error("Cannot parse boolean as number");
  else if (!a || !b) throw new Error("parameter are empty");
  else if (/\s/g.test(a) || /\s/g.test(b))
    throw new Error("String cannot be reliably parsed to number");
}

// const result = sum("aaa", "bbb");
// console.log(result, typeof result); // Should print 14 string

module.exports = sum;
