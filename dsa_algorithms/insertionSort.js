const insertionSort = (nums) => {
	const n = nums.length;
	for(let i = 1; i < n; i++){
	  let hole = i; // initially first element would always be sorted
	  let value = nums[i]; // this is the value i would be comparing each time
	  
	  // if hole is zero that means i am in already sorted position
	  while(hole > 0 && value < nums[hole-1]){
	    nums[hole] = nums[hole-1];
	    hole = hole - 1;
	  }
	  nums[hole] = value;
	}
	return nums;
};

let nums = [7,3,1,4,6,2]

console.log("SelectionSort", insertionSort(nums))