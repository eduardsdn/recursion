function fibonacci(n){
    if (n < 2) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(3))

function mergeSort(array) {
    if(array.length < 2){ 
        return array
    }
    let middle = Math.floor(array.length/2)

    let leftArray = array.slice(0, middle)
    let rightArray = array.slice(middle)
    
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}


function merge(leftArray, rightArray) {
    const sortedArray = []
   
    while(leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift())
        }
        else {
            sortedArray.push(rightArray.shift())
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray]
}

console.log(mergeSort([3,5,7,1,2,4,8,6]))

  