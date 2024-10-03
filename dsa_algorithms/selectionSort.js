// We would have to do (n-2) iterations since, after n-2 iterations 
// the last element of Array will always be larget number.
// n-2 means last second number

const selectionSort = (nums) => {
    const n = nums.length;

    for(let i = 0; i < n-1; i++) {
        let minIndex = i;

        //inner loop will search for minimum number after i'th index till end of array
        for(let j = i+1; j < n; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            }
        }

        //Swap if minIndex is not i'th index

        if(minIndex != i) {
            let temp = nums[i]
            nums[i] = nums[minIndex]
            nums[minIndex] = temp
        }
    }

    return nums;
}


let nums = [3,1,4,2,7,6]

console.log("SelectionSort", selectionSort(nums))