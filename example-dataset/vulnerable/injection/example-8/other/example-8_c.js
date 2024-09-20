// testing taint by reference

module.exports = function f(p) {
    const a = [[0,0], 0];
    const c = a[0];
    a[0] = [p, 0];
    return eval(c[0]);
};