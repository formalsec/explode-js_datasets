// taint object property
// sanitization before assignment

function assign(obj, key, subKey, value) {
    if(key == "__proto__" || typeof obj[key] === 'function') {
        return;
    }
    obj[key][subKey] = value;
}

module.exports = function f(key, subKey, value) {
    let customer = { name: "person", role: "user" };
    assign(customer, key, subKey, value);
}
