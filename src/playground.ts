const array = [5, 3, 1, 5, 9, 4, 7, 33, 32, 11, 98, 75, 10];

function insertionSort<T>(array: T[]): T[] {
for (let i = 0; i < array.length; i++) {
    let toSort = array[i];
    let j = i;
    while (j>0 && array[j-1] > toSort) {
        array[j] = array[j-1];
        j = j - 1;
    }
    array[j] = toSort;
}
    return array;
}


console.log(insertionSort(array));