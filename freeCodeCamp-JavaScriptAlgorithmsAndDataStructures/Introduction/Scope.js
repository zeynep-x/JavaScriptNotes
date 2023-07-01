// Variables declared without the let or const keywords are created in the global scope

function myLocalScope() {
    const myVar = 3;
    console.log('inside myLocalScope', myVar);
}
myLocalScope(); // inside myLocalScope 3
// console.log('outside myLocalScope', myVar);
// ReferenceError: myVar is not defined