const smellNum = (nums) => {
  let smell = nums[0];
  for (const num of nums) {
    if (num < smell) {
      smell = num;
    }
  }
  return smell;
};
console.log(smellNum([1, 2, 3, 45, 23, 12, 30, 3, 2]));

