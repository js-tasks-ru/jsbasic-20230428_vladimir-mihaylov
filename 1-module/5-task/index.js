function truncate(str, maxlength) {
  if (str.length + 1 > maxlength) {
    let res = "";
    for (let i = 0; i < maxlength - 1; i++) {
      res += str[i];
    }
    return res + "…";
  }
  return str;
}
