function roman_numerals(a) {
  if (a === 1) {
    return 'I';
  } else if(a === 5){
    return 'V'
  } else if (a === 10) {
    return 'X'
  }
}
module.exports = roman_numerals;