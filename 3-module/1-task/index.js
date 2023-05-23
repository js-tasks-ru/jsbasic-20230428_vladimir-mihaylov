function namify(users) {
  const names = [];
  for (let user of users) {
    let name = user.name;
    names.push(name);
  }
  return names;
}
