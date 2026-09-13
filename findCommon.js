const findCommon = (num1, num2) => {
  let find = [];
  for (let i = 0; i < num1.length; i++)
    if (num2.includes(num1[i])) {
      find.push(num1[i]);
    }
  return find;
};

console.log(findCommon([1, 2, 3, 4], [3, 4,2, 5, 6]));
