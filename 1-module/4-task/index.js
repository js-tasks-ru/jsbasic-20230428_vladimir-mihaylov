function checkSpam(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === "x" &&
      str[i + 1].toLowerCase() === "x" &&
      str[i + 2].toLowerCase() == "x"
    ) {
      return true;
    } else if (
      str[i] == "1" &&
      str[i + 1].toLowerCase() === "x" &&
      str[i + 2].toLowerCase() == "b" &&
      str[i + 3].toLowerCase() == "e" &&
      str[i + 4].toLowerCase() == "t"
    ) {
      return true;
    }
  }
  return false;
}
