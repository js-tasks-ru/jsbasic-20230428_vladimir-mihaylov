function getMinMax(str) {
  const arr = str.split(" ");
  const newArr = [];
  for (let value of arr) {
    if (Number.isFinite(+value)) {
      newArr.push(+value);
    }
  }

  let min = newArr[0];
  let max = newArr[0];

  for (let num of newArr) {
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }

  return { min, max };
}
