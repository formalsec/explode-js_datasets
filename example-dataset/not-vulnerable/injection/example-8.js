// passing tainted parameter as non-vulnerable argument of a sink

const child_process = require('child_process')

module.exports = function f(x) {
    child_process.exec("literal", x);
};