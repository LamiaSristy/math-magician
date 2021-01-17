import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const resultData = data;

  if (/[0-9]/.test(buttonName)) {
    if (!total || total === '0') {
      resultData.total = buttonName;
    }
    if (total && total !== '0' && !next && !operation) {
      resultData.total += buttonName;
      if (buttonName === '0' && total === '0') resultData.total = total;
    }
    if (total && operation && (!next || next === '0')) {
      resultData.next = buttonName;
    }
    if (total && next && operation && next !== '0') {
      resultData.next += buttonName;
    }
  }

  if (buttonName === '+/-') {
    if (total && !next) {
      resultData.total = operate(total, -1, 'X');
    }
    if (next) {
      resultData.next = operate(next, -1, 'X');
    }
  }

  if (buttonName === '%') {
    if (total && !next) {
      resultData.total = operate(total, 100, '÷');
    }
    if (next) {
      resultData.next = operate(next, 100, '÷');
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      resultData.total = '0.';
    }
    if (total && !next && total.indexOf('.') === -1) {
      resultData.total = `${total}.`;
    }
    if (next && next.indexOf('.') === -1) {
      resultData.next = `${next}.`;
    }
  }

  if (buttonName === 'AC') {
    resultData.total = undefined;
    resultData.next = undefined;
    resultData.operation = undefined;
  }

  if (['+', 'X', '-', '÷', '='].includes(buttonName)) {
    const newOperation = buttonName === '=' ? undefined : buttonName;
    if (total && next && operation) {
      resultData.total = operate(total, next, operation);
      resultData.next = undefined;
      resultData.operation = newOperation;
    }

    if (total && !next) {
      resultData.operation = newOperation;
    }
  }

  return resultData;
};

export default calculate;
