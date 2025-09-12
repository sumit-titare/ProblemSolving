//  Non -optimized approach

const bubbleSort = (nums) => {
    const n = nums.length;
    // for any array of length n, we have to run loop for  n-1 times
    // if we do (k = 0 to k < n-1) it would mean we are running loop for n-1 times, Hence (k = 0 to k < n-1)

    for(let k = 0; k < n-1; k++) {
        for(let i = 0; i < n-1; i++) { // here since n-1 is the last element and there is nothing to compare at n+1
            if(nums[i] > nums[i+1]) {
                let temp;
                temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
            }
        }
    }
    return nums;
};


// Here we will not be traversing through already sorted numbers
const bubbleSortOptimised1 = (nums) => {
    const n = nums.length;
    for(let k = 0; k < n-1; k++) {
        // Since represents the number of iteration and with each iteration 
        // we will be having last k numbers as sorted and we dont want to iterate those again
        // Hence: i < n-1-k

        for(let i = 0; i < n-k-1; i++){ 
            if(nums[i] > nums[i+1]){
                let temp;
                temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
            }
        }
    }

    return nums;
}

// Optimised 2: Here, we will be skipping the sort if in any iteration we are not swapping any number, 
// because, if we are not swapping any number then it means array is already sorted 

const bubbleSortOptimised2 = nums => {
    const n = nums.length;
    for(let k = 0; k < n-1; k++){
        let flag = 0;
        for(let i = 0; i < n-k-1; i++){
            if(nums[i] > nums[i+1]){
                let temp;
                flag = 1
                temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
            }
        }
        if(flag == 0){ break; }
    }
    return nums;
}


let nums = [7,4,2,1,0,5]
console.log("bubbelSort => ",bubbleSort(nums)); //[ 0, 1, 2, 4, 5, 7 ]
console.log("bubbleSortOptimised1 => ", bubbleSortOptimised1(nums)); //[ 0, 1, 2, 4, 5, 7 ]
console.log("bubbleSortOptimised2 => ", bubbleSortOptimised2(nums)); //[ 0, 1, 2, 4, 5, 7 ]