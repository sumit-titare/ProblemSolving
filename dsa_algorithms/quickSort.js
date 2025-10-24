const partition = (nums, start, end) => {
    // define pivot and initialize partitionIndex:
    // ( partitionIndex would be the index where at any time all the numbers to the left of it would alway be smaller than the Pivot number
    //   and the elements to the right of partitionIndex would be greater than Pivot number)
    let pivot = nums[end];
    let partitionIndex = start;

    // here: we will have a partitionIndex at start then we will iterate through nums once and
    // pick all the elements smaller than pivot number and would push it to left of partitionIndex and then
    // increment it by one: so that at the end of iteration we will have the required arrangement (i.e. left elements smaller and right grater than pivot number)

    for(let i=start; i< end; i++){
        if(nums[i] < pivot){
            swap(nums, partitionIndex, i);
            partitionIndex++;
        }
    }
    swap(nums, partitionIndex, end);
    
    return partitionIndex;
}

// SWAP
const swap = (nums, i, j) => {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp;
}

// let nums = [1, 0, 5, 7, 4, 2, 3];
// console.log("partition", partition(nums, 0, 6));

// QuickSort

const quickSort = (nums, start, end) => {
    if(start >= end) { return }
    let partitionIndex = partition(nums, start, end);
    quickSort(nums, start, partitionIndex-1);
    quickSort(nums, partitionIndex+1, end);

    return nums;
}

let nums = [1, 0, 5, 7, 4, 2, 3];
console.log("quickSort", quickSort(nums, 0, 6));
