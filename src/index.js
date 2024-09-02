module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = {};

  for (let [open, close] of bracketsConfig) {
    bracketsMap[close] = open;
  }

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (Object.values(bracketsMap).includes(currentChar)) {
      if (bracketsMap[currentChar] === currentChar && stack[stack.length - 1] === currentChar) {
        stack.pop();
      } else {
        stack.push(currentChar);
      }
    } else if (bracketsMap.hasOwnProperty(currentChar)) {
      if (stack.length === 0 || stack.pop() !== bracketsMap[currentChar]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
