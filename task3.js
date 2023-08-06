// rotating an array

function rotateArray(arr,rotates) {
    for(let i=0; i <= rotates; i++) {
        // arr.unshift(arr.pop());
        let lastVal = arr[arr.length-1];
        for(let j=arr.length-1; j > 0; j--) {
            arr[j] = arr[j-1];
        }
        arr[0] = lastVal;
    }
}
console.log(rotateArray([1,2,3,4,5],2));