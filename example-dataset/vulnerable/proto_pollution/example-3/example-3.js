// prototype pollution merge

module.exports = function merge(target, source) {
    for(key in source) {
        value = source[key];
        if (value && typeof value === 'object') {
            merge(target[key], value);
        } else {
            target[key] = value;
        }
    }
}