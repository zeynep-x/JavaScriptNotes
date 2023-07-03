// in-line comment

/*
multi-line
comment
*/

/*
Data Types
undefined, null, boolean, string, symbol, bigint, number, object
*/

var eight = 8;

var myFirstName = "Zeynep";
var myLastName = "Akkaya";

var undefined_var; // undefined
undefined_var + 1; // NaN -> Not a Number
undefined_var + "a"; // undefined

// camelCase

eight++;
console.log(eight); // 9
eight--;
console.log(eight); // 8

eight += 2;
console.log(eight); // 10
eight -= 2;
console.log(eight); // 8

const str = "I am a \"double quoted\" string inside \"double quotes\".";
/*
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
*/

let concatenatedStr = "This is the start." + " This is the end.";
console.log(concatenatedStr); // This is the start. This is the end.

concatenatedStr = "This is the first sentence.";
concatenatedStr += " This is the second sentence.";
console.log(concatenatedStr); // This is the first sentence. This is the second sentence.

// Type Coercion
1 == '1' // true
"3" == 3  // true

3 === 3  // true
3 === '3' // false

// typeof()
console.log(typeof (3)); // number
console.log(typeof ("3")); // string