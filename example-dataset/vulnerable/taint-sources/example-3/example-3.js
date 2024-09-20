module.exports = exports = function(host) {
    var donors = slice(arguments, 1);
    donors.forEach(function(donor) {
        Object.keys(donor).forEach(function(key) {
            host[key] = donor[key];
        });
    });
    return host;
};