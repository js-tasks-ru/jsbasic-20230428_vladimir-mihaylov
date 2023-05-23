function camelize(str) {
  if (str.length === 0) return str;
  let newStr = str[0] === "-" ? str.slice(1) : str;
  let arr = newStr.split("-");
  let newArr = [];
  let res = "";
  for (let str of arr) {
    newArr.push(str[0].toUpperCase() + str.slice(1));
  }
  res = newArr.join("");
  if (str[0] === "-") return res;
  return res[0].toLowerCase() + res.slice(1);
}
