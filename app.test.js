const roman_numerals = require('./app');

// test("return I when 1", () => {
//   expect(roman_numerals(1)).toBe("I");
// });

// test("return V when 5", () => {
//   expect(roman_numerals(5)).toBe("V");
// });

test("return X when 10", () => {
    expect(roman_numerals(10)).toBe("X");
  });