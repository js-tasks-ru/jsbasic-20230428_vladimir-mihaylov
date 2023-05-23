function filterRange(arr, a, b) {
  let res = [];
  for (let value of arr) {
    if (value >= a && value <= b) {
      res.push(value);
    }
  }

  return res;
}
