const vawelaCount = (str) => {
  let count = 0;
  const vawels = "aeiouAEIOU";
  for (const char of str) {
    if (vawels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(vawelaCount("javascrip"));
