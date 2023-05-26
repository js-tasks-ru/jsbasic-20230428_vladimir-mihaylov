function getMinMax(str) {
  let arr = str
    .split(" ")
    .filter((value) => Number.isFinite(+value))
    .map((num) => Number(num));
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }

  return { min, max };
}
