function showSalary(users, age) {
  const param = Number(age);
  const newArr = [];

  for (let user of users) {
    const userAge = user.age;
    const userBalance = user.balance;
    const userName = user.name;
    userAge <= param ? newArr.push(`${userName}, ${userBalance}`) : 0;
  }

  const result = newArr.join("\n");
  result.slice(-1);

  return result;
}
