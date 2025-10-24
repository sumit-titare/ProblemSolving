let nums = [5,4,1,3,2,7,6];


const bubbleSort = (nums) => {
    const n = nums.length;
    for(let i = 1; i < n-1; i++){
        for(let j=0; j <n-i-1; j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums;
}

const selectionSort = (nums) => {
    const n = nums.length;

    for(let k = 0; k < n-1; k++){
        let minIndex = k;
        for(let i = k+1; i < n; i++){
            if(nums[i] < nums[minIndex]){
                minIndex = i;
            }
        }
        if(minIndex != k){
            let temp = nums[k];
            nums[k] = nums[minIndex]
            nums[minIndex] = temp;
        }
    }
    return nums;
}

const insertionSort = (nums) => {
    const n = nums.length;
    //outer loop n-1 times
    for(let i = 1; i < n; i++){
        let hole = i;
        let value = nums[i];

    // inner loop find minimum index without disturbing arrays sort order
    while(hole > 0 && nums[hole-1] > value){
        nums[hole] = nums[hole-1];
        hole = hole - 1;
    }
    //replace  minimum index with outer loop index value
      nums[hole] = value; 
    }
    return nums;
}

// console.log("insertionSort", insertionSort(nums));

//quickSort partitions:

const lomutoPartition = (nums) => {
    const n = nums.length;
    let pivot = nums[n-1];

    let i = -1;
    for(let j= 0; j < n; j++){
        //compare j-th number with pivot, if it is less swap it with i and increment i
        if(nums[j] < pivot){
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    //at last swap (i+1)th number with it with pivot
    [nums[i+1], nums[n-1]] = [nums[n-1], nums[i+1]]
    return i+1;
}

const hoarePartition = (nums) => {
	const n = nums.length;
	let pivot = nums[0]; // pivot as first number
	let i = -1 ,j= n;
	
	while(true){
		// if i < pivot increment
		do {
			i++;
		}while(nums[i]< pivot);
		
		//if j > pivot increment
		do {
		  j--
		}while(nums[j] > pivot);
		
        //breaking condition
        if(i>j) break;
		//else swap i with j(i.e. swap larger number with smaller number)
    [nums[i], nums[j]] = [nums[j], nums[i]] 	   
	}
	return i;
}


console.log("hoarePartition", hoarePartition(nums));