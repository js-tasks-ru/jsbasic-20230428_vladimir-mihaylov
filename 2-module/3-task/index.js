let calculator = {
  read(a, b) {
    calculator.a = a;
    calculator.b = b;
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return Number(this.a) * Number(this.b);
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
