const merge = (leftArray, rightArray, nums) => {

    const lL = leftArray.length;
    const rL = rightArray.length;
    const nL = nums.length;
    // i for leftArray, j for rightArray and k for resultArray
    let i = 0,j = 0 ,k = 0;

    while(i < lL && j < rL){
        if(leftArray[i] < rightArray[j]){
            nums[k] = leftArray[i];
            i++;
        }else {
            nums[k] = rightArray[j];
            j++;
        }
        k++;
    }
    // most of the times either of left or right Array would be finished first, in such cases we have to fill resultant array from the single remaining array
    while(i < lL){
        nums[k] = leftArray[i];
        i++;
        k++;
    }
    while(j < rL){
        nums[k] = rightArray[j];
        j++;
        k++;
    }
    return nums;
}


// let leftArray = [2,4,7];
// let rightArray = [0,1,5];
// console.log("merge => ",merge(leftArray, rightArray));

const mergeSort = (nums) => {
    const n = nums.length;

    if(n <= 1) { return }

    const midpoint = Math.floor(n/2);
    const leftArray = [], rightArray = [];
    
    for(let i = 0; i < midpoint; i++){
        leftArray[i] = nums[i];
    }

    for(let j = midpoint; j < n; j++){
        rightArray[j - midpoint] = nums[j]
    }
//console.log("leftArray => ",leftArray);
//console.log("rightArray => ",rightArray);
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, nums);

    return nums;
}

let nums = [7,4,2,1,0,5]
console.log("mergeSort => ",mergeSort(nums)); //[ 0, 1, 2, 4, 5, 7 ]