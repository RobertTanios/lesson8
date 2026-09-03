const appOperations = require('../src/appOperations');

test("multiplication property of zero", () => {
  expect(appOperations(5, 0)).toBe(0);
});

test('multiply 2 and 3 to equal 6', () => {
  expect(appOperations(2, 3)).toBe(6);
});