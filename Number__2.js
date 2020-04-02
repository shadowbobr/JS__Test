var numbers = [4, 7, 2, 11, 15, 23, 44, 5, 89, 90];

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

console.log(contains(numbers, 17));