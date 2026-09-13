const PositiveNegative = (nums) => {
  let positive = [];
  let negative = [];
  let zero = 0;
  for (const num of nums) {
    if (num > 0) {
      positive.push(num);
    } else if (num < 0) {
      negative.push(num);
    } else {
      console.log("the number is 0", zero++);
    }
  }
  return { positive, negative, zero };
};
console.log(
  PositiveNegative([
    10, 3, 4, -5, -8, 0, 2, 4, 2, 3, 4, -4, 0, -23, -23, 0, 5, -56,
  ]),
);
