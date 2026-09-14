const reverseWord = (words) => {
  const menus = words.split(" ").reverse().join(" ");
  return menus;
};
console.log(reverseWord("i love you"));
