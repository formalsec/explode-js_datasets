var deepExtend = module.exports = function (obj_1) {

    var target = arguments[0];

    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);

    var val, src, clone;

    args.forEach(function (obj) {
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            target[key] = val;
        });
    });
}
