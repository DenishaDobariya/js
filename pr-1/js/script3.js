function findMaxMinValue(arr) {
    if (arr.length === 0 || arr[0].length === 0) {
        throw new Error("Array must not be empty");
    }

    let max = arr[0][0];
    let min = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
        }
    }

    return { max, min };
}

const ar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const { max, min } = findMaxMinValue(ar);
console.log("Maximum value:", max);
console.log("Minimum value:", min);
