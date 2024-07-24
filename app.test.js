const roman_numerals = require('./sum');

test("return I when 1", () => {
  expect(roman_numerals(1)).toBe("I");
});