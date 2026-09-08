const appOperations = require('../src/appOperations');

test("multiplication property of zero", () => {
  expect(appOperations.multiply(5, 0)).toBe(0);
});

test('adding 2 values', () => {
  expect(appOperations.add(2, 3)).toBe(5);
});

test('substracting 2 values', () => {
  expect(appOperations.substract(5, 3)).toBe(2);
});