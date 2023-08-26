import reverseString from '../tasks/reverseString.js';

test('Check whether function returns reverse string', () => {
  const inputString = 'Hello';
  const result = reverseString(inputString);
  expect(result).toBe('olleH');
});

test('Compare the indexes before and after reverseString', () => {
  const inputString = 'Hamburger';
  const result = reverseString(inputString);
  expect(result[0]).toBe(inputString[inputString.length - 1]);
});