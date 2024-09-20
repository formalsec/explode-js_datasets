// testing taint from parameter to eval function call
// testing array reconstruction

module.exports = function f(arr) {
    for (i = 0; i < arr.length; i++) {
        return eval(arr[i].x + arr[i].y)
    }
}