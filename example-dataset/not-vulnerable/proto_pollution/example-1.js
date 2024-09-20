module.exports = function f(key, subKey) {
    let customer = { name: "person", role: "user" };
    customer[key][subKey] = "literal";
}
