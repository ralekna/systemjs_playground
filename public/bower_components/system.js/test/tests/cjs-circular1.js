exports.first = 'first value';
var p = require('./cjs-circular2').p;
exports.first = 'second value';
exports.firstWas = p();