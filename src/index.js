module.exports = function check(str, bracketsConfig) {
var open = [];
var close = [];
var buffer = [];
for (var i = 0; i < str.length; i++) {
    buffer.push(str[i]);
  }
if (buffer.length % 2 !== 0) {
      return false;
  }
for (var i = 0; i < bracketsConfig.length; i++) {
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
  }
for (var i = buffer.length - 1; i >= 0; i--) {
    for (var j = 0, length = open.length; j < length; j++) {
        if (buffer[i] === open[j] && buffer[i + 1] === close[j]) {
           buffer.splice(i, 2);
            }
        }
    }
    return (buffer.length === 0);
};
