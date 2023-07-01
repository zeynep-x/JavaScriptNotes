// .length
console.log("Zeynep".length); // 6

// [0]
console.log("Zeynep"[0]); // Z

// Strings are immutable

let myFirstName = "Zeynep";
// myFirstName[0] = "X"; -> error

myFirstName = "Xeynep";
console.log(myFirstName); // Xeynep

const lastLetter = myFirstName[myFirstName.length - 1];
console.log(lastLetter); // p