import operate from '../logic/operate';

const num1 = 10;
const num2 = 5;

test('the sum of two numbers', () => {
  expect(operate(num1, num2, '+')).toEqual('15');
});

test('the sum of two numbers', () => {
  expect(operate(num1, num2, '-')).toEqual('5');
});

test('the sum of two numbers', () => {
  expect(operate(num1, num2, 'X')).toEqual('50');
});

test('the sum of two numbers', () => {
  expect(operate(num1, num2, '÷')).toEqual('2');
});
