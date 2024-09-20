// testing taint from parameter to eval function call
// testing array reconstruction

module.exports = function f(arr) {
    return eval(arr[0] + arr[1] + arr[5]);
}