function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

//

function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum) {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
    return [];
};
console.log(rangeOfNumbers(5, 10)); // [ 5, 6, 7, 8, 9, 10 ]