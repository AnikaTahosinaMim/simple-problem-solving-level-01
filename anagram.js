const Anagram = (word1, word2) => {
  const words = word1.split("").sort().join("");
  const words2 = word2.split("").sort().join("");
  if (words === words2) {
    return true;
  } else {
    return false;
  }
};
console.log(Anagram("listen", "silen"));
