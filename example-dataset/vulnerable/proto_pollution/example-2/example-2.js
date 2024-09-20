// two step prototype pollution

module.exports = function f(key, subKey, value) {
    obj = {};
    let x = obj[key];
    x[subKey] = value;
}