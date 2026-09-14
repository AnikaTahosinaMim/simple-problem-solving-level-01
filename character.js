const characterFrequency = (menus) => {
  let count = {};
  for (const char of menus) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};
console.log(characterFrequency("javascript"));
