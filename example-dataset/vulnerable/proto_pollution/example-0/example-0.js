// Prototype pollution

module.exports = function f(key, subKey, value) {
    customer = {};
    customer[key][subKey] = value;
}