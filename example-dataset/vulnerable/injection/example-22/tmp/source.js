// testing taint from parameter to eval function call
// source and sink in different files

const sink = require('../sink.js');

module.exports = function f(x) { 
    return sink(x);
}