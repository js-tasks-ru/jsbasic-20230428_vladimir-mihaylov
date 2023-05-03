function checkSpam(str) {
  let result = str.toLowerCase();
  let signature1 = "1xbet";
  let signature2 = "xxx";
  if (result.indexOf(signature1) !== -1 || result.indexOf(signature2) !== -1) {
    return true;
  }
  return false;
}
