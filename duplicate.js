const removeDuplicate = (num) => {
  return [...new Set(num)];
};
// console.log(removeDuplicate([12, 2, 3, 2, 3, 4, 2, 3]));
// const remove = (nums) => {
//   let clearNumber = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!clearNumber.includes(nums[i])) {
//       clearNumber.push(nums[i]);
//     }
//   }
//   return clearNumber;
// };
// console.log(remove([23, 54, 34, 56, 3, 2, 3, 4, 2, 3]));
const duplicate = (nums) => {
  let count = 0;
  let duplicate = [];
  let clearNumber = [];
  for (let i = 0; i < nums.length; i++) {
    if (clearNumber.includes(nums[i])) {
      if (!duplicate.includes(nums[i])) {
        duplicate.push(nums[i]);
      }
      count++;
    } else {
      clearNumber.push(nums[i]);
    }
  }
  duplicate.sort((a, b) => a - b);

  return { count, clearNumber, duplicate };
};
console.log("duplictae number is", duplicate);
console.log(duplicate([3, 3, 4, 2, 2, 4, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5]));
