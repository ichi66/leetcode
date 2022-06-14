function quickSort(nums: number[], lo: number, hi: number){
  if(lo >= hi){
    return;
  }
  const p = partition(nums, lo, hi);
  quickSort(nums, lo, p-1);
  quickSort(nums,p+1,hi);
}


function partition(nums: number[], lo: number, hi: number){
  const pivot= nums[lo];
  let left = lo;
  let right = hi;
  while(left < right){
    while(nums[left] <= pivot && left < hi){
      left++;
    }
    while(nums[right] > pivot && right > lo){
      right--;
    }
    if(left >= right){
      break;
    }else{
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
  }
  nums[lo] = nums[right]
  nums[right] = pivot;
  return right;
}

const a = [11,12,0, 7 , 9 ,3,2 ,5, 54, 4];
quickSort(a,0,a.length-1);
console.log(a)










// function quickSort(nums: number[], lo: number, hi: number): void{
//   // 边界情况
//   if(lo >= hi){
//     return;
//   }
//   const p = partition(nums, lo, hi);
//   quickSort(nums,lo, p-1);
//   quickSort(nums, p+1, hi);
// }

// function partition(nums: number[], lo: number, hi: number): number{
//   let i = lo;
//   let j = hi;
//   let pivot = nums[lo];
//   while(i < j){
//     while(i < hi && nums[i] <= pivot){
//       i++;
//     }
//     while(j > lo && nums[j] >= pivot){
//       j--;
//     }
//     if(i < j){
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//     }else{
//       break;
//     }
//   }
//   nums[lo] = nums[j];
//   nums[j] = pivot; 
//   return j;
// }
