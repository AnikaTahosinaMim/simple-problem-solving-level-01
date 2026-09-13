const oddNumbers = (number) => {
  let count = 0;
  let odd = [];
  for (const char of number) {
    if (char % 2 === 0) {
      count++;
      odd.push(char);
    }
  }
  return { count, odd };
};
console.log(oddNumbers([11, 13, 15, 14, 22, 23, 24]));
