function mergeArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Arrays must be square matrix");
    }

    const mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push([...arr1[i], ...arr2[i]]);
    }

    return mergedArray;
}

const ar1 = [
    [1, 2],
    [3, 4]
];

const ar2 = [
    [5, 6],
    [7, 8]
];

const mergedArray = mergeArrays(ar1, ar2);
console.log(mergedArray);
