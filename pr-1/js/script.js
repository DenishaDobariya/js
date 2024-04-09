function sumOfArrays(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
        throw new Error("Arrays must be square matrix");
    }

    const rows = arr1.length;
    const cols = arr1[0].length;

    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(row);
    }

    return result;
}

const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const array2 = [
    [2, 5, 7],
    [6, 4, 4],
    [6, 2, 9]
];

const sumArray = sumOfArrays(array1, array2);
console.log(sumArray);