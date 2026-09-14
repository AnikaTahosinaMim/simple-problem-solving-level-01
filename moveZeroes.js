const moveZeroes = (nums) => {
  let inperpress = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[inperpress], nums[i]] = [nums[i], nums[inperpress]];
      inperpress++;
    }
  }
  return nums;
};
console.log(moveZeroes([2, 3, 0,4, 3, 4]));
