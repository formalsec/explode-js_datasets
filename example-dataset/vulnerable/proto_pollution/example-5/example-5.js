// prototype pollution
// multi scope function

module.exports = function f(obj, val) {
    return function z(key, subKey) {
        let x = obj[key];
        x[subKey] = val;
    }
}