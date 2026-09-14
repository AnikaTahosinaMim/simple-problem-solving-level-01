const palindrome = (names) => {
  const palin = names.toLowerCase();
  const name = palin.split("").reverse().join("");
  if (palin === name) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrome("madam"));
