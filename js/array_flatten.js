


function flatten(nums){

  let  res =[]
  function helper(nums){
    for(let i = 0; i < nums.length; i++){
      if(Array.isArray(nums[i])){
        helper(nums[i]);
      }else{
        res.push(nums[i]);
      }
    }
  }
  helper(nums);
  console.log(res);
  return res;
}

flatten([1,2,3,4,5])
flatten([1,2,[3,3,4], 2,3, [[2,[2,3]]]])