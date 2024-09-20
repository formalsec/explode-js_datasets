// taint object property
// object property lookup and object return
// tampering object reference

module.exports = function f(p, t) {
    let customer = { name: "person", role: "user" }
    let x = customer;
    let y = p;
    x[y] = t;
    console.log(`customer.role => ${customer.role}`);
    console.log(`toString implementation => ${customer.toString()}`);
    return x;
};