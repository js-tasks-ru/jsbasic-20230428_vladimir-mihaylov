/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function isValid(name) {
  let minUserNameLength = 4;
  if (
    name == null ||
    name.length < minUserNameLength ||
    isContainSpaces(name)
  ) {
    return false;
  }
  return true;

  function isContainSpaces(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == " ") {
        return true;
      }
    }
    return false;
  }
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
