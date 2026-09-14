const NonRepiting = (characters) => {
  let words = {};
  for (const char of characters) {
    if (words[char]) {
      words[char]++;
    } else {
      words[char] = 1;
    }
  }
  for (const char of characters) {
    if (words[char] === 1) {
      return char;
    }
  }
  return null
};

console.log(NonRepiting("javascript"));
