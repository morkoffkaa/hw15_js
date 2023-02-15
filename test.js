const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, index) {

    const result = arr.splice(index);
    return result;
}

arr.push(55, 67);

console.log(arr);

removeElement(arr, 3);

console.log(arr);