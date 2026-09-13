const removeDuplicate = (num) => {
  return [...new Set(num)];
};
// console.log(removeDuplicate([12, 2, 3, 2, 3, 4, 2, 3]));
const remove = (nums) => {
  let clearNumber = [];
  for (let i = 0; i < nums.length; i++) {
    if (!clearNumber.includes(nums[i])) {
      clearNumber.push(nums[i]);
    }
  }
  return clearNumber;
};
console.log(remove([23, 54, 34, 56, 3, 2, 3, 4, 2, 3]));
