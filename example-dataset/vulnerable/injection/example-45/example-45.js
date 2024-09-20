// testing taint from parameter to eval function call
// testing param that can be object and array

module.exports = function f(obj) {
    if (obj.length > 0 && obj.x > 0) {
        return eval(obj.x + obj.length)
    }
}