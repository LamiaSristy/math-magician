import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  try {
    const one = Big(+numberOne);
    const two = Big(+numberTwo);

    if (operation === '÷') {
      result = Big(one.div(two));
    }

    if (operation === '+') {
      result = Big(one.plus(two));
    }

    if (operation === 'X') {
      result = Big(one.times(two));
    }

    if (operation === '-') {
      result = Big(one.minus(two));
    }
  } catch (error) {
    result = NaN;
  }
  return result.toPrecision().toString();
};

export default operate;
