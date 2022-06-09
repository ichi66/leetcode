function calcFreq(nums: number[]) : number[]{
  for(let i = 0; i< nums.length; i++){
    if(nums[i] <= 0){
      continue
    }
    const nextIndex = nums[i] - 1;
    // next index has already been modified
    nums[i] = 0;
    nextIndexRecusion(nums, nextIndex);

  }
  return nums.map((el)=> el * -1);
}

function nextIndexRecusion(nums: number[], index: number){
  if(nums[index]  <=0 ){
    nums[index] -= 1;
  }else{
    const nextIndex = nums[index] - 1;
    nums[index] = -1;
    nextIndexRecusion(nums, nextIndex);
  }

}



console.log(calcFreq([5,5,1,1,2]));