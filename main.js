function fibonacci(n){
    if (n < 2) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(3))

function mergeSort(array) {
    if(array.length < 2){ // if there is on value left in an array stop recursion
        return array
    }
    let middle = Math.floor(array.length/2)
                                            
    let leftArray = array.slice(0, middle) // split array into two subarrays
    let rightArray = array.slice(middle)
    
    return merge(mergeSort(leftArray), mergeSort(rightArray)) // merge two sub arrays 
}

function merge(leftArray, rightArray) {
    const sortedArray = []  //create empty array where sorted values go to 
   
    while(leftArray.length && rightArray.length) { //iterate until one of the sub arrays does not comtain any values
        if (leftArray[0] <= rightArray[0]) {    //compare values of the same indecies
            sortedArray.push(leftArray.shift()) //add higher value to the sorted array an d remove it from left sub array
        }
        else {
            sortedArray.push(rightArray.shift()) //add higher value to the sorted array an d remove it from right sub array
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray] // return sorted array and any left values from left or right array
}

console.log(mergeSort([3,-5,7,1,2,-4,8,6]))

  