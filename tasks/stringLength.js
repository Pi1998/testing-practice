function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } if (string.length === 0) {
    throw new Error('String length must be at least one character long!');
  } else {
    throw new Error('String length must not be longer than 10 characters!');
  }
}

module.exports = stringLength;
