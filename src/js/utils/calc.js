const calcFns = {
  minus: (num1, num2) => num1 - num2,
  plus: (num1, num2) => num1 + num2,
  times: (num1, num2) => num1 * num2,
  divide: (num1, num2) => (num2 === 0 ? 'ERROR' : num1 / num2),
};

const calc = (sign, num1, num2) => {
  const count = calcFns[sign];
  return count(Number(num1), Number(num2));
};

export default calc;
