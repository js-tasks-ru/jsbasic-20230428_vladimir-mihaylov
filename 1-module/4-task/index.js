function checkSpam(str) {
  let result = str.toLowerCase();
  let signature1 = "1xbet";
  let signature2 = "xxx";
  if (result.indexOf(signature1) == 0 || result.indexOf(signature2) == 0) {
    return true;
  }

  return false;
}
