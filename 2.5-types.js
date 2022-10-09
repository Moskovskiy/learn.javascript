console.log(`${NaN ** 0}`); // 1

// Boolean

console.log (`Is '0' true ?: ${ '0' == true }`); // false, == converts type
console.log (`Is '0' true ?: ${ Boolean('0') }`); // true
console.log (`Is '1' true ?: ${ Boolean('1') }`); // true

// BigInt

let bigInt = 384928394283029384092480294n;
console.log (`This is big int: ${ typeof (bigInt) }`); // bigint
// console.log (bigInt + 3) // ERROR! Cannot mix BigInt and other types, use explicit conversions
console.log (`Converting: ${ bigInt + BigInt(3) }`) // ok
console.log (`Adding: ${ bigInt + 3n }`) // ok

// null

let nullValue = null;
console.log (`${typeof nullValue}`); // null is empty object

nullValue = undefined;
console.log (`${typeof nullValue}`); // undefined type