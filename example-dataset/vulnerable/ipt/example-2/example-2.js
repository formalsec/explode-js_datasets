// taint object property
// object property lookup and object return

module.exports = function f(key, subKey, value) {
    let customer = { name: {first:"person"}, role: "user" };
    customer[key][subKey] = value;
    console.log(`customer.name.first => ${customer.name.first}`);
    console.log(`customer.name.first => ${customer.name.toString()}`);
    return customer;
}
