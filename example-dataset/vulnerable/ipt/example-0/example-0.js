// taint object property
// object property lookup and object return

module.exports = function f(p, t) {
    let customer = { name: "person", role: "user" }
    customer[p] = t;
    console.log(`customer.role => ${customer.role}`);
    console.log(`toString implementation => ${customer.toString()}`);
    return customer;
};