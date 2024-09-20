function f1(target) {
    function f2(obj, key, value) {
        obj[key] = value;
    }
    const obj = arguments[0];
    f2(target, 0, obj);
};