const frequencyCount = (nums) => {
  let frequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]]) {
      frequency[nums[i]]++;
    } else {
      frequency[nums[i]] = 1;
    }
  }
  return frequency;
};
console.log(
  frequencyCount([ "banana", "apple", "mango", "banana", "apple"]),
);
