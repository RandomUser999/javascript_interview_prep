/* Takes an unsorted array and then returns the sorted array */
/* Runs O(nlogn) on all cases */
var a = [91, 83, 3, 712346, -2, 51, 100, 3];

function mergeSort(arr)
{
    if (arr.length < 2) {
        return arr;
    }

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

console.log(mergeSort(a));
