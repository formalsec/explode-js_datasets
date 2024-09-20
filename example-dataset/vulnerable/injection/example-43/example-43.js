// testing taint from parameter to eval function call
// testing array reconstruction

module.exports = function f(arr) {
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            return eval(arr[i])
        }
    }
}