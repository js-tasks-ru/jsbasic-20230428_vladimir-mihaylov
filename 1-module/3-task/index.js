function ucFirst(str) {
  if (str == "") return str;
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
