// Prototype pollution where key and subkey are both "__proto__"

module.exports = function f(key, subKey, subSubKey, value) {
    let obj = function() {};
    obj.prototype.m = function () {};
    obj[key][subKey][subSubKey] = value;
}