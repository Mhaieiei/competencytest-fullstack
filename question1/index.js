function sum(a, b) {
  if (!a || !b) throw new Error("parameter are empty");
  const num1 = parseInt(a);
  const num2 = parseInt(b);
  if (!num1 || !num2) throw new Error("Cannot parse string to number");
  return (num1 + num2).toString();
}
// const result = sum("-10", "-2");
// console.log(result, typeof result); // Should print 14 string

module.exports = sum;
