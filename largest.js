// const largestNumber = (nums) => {
//   let largest = 0;
//   for (const char of nums) {
//     if (nums > char) {
//       largest = nums;
//     }
//   }
//   return largest;
// };
// console.log(largestNumber([10, 5, 25, 8, 15]));
const largestNumber = (nums) => {
  let largse = nums[0];
  for (const num of nums) {
    if (num > largse) {
      largse = num;
    }
  }
  return largse;
};
console.log(largestNumber([10, 2, 30, 34, 12, 42, 33]));
// with math.max
const largestNum = (numbers) => Math.max(...numbers);
console.log(largestNum([10, 2, 30, 34, 52, 42, 33]));
