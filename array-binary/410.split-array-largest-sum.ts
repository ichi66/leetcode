/*
 * @lc app=leetcode id=410 lang=typescript
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
/// 和1101一样 只是换了一种说法
function splitArray(nums: number[], m: number): number {
  let left = Math.max(...nums);
  let right = nums.reduce((a,b) => a +b, 0); 
  while(left <= right){
    const mid = Math.floor((left + right) /2);
    if(subArraynum(nums, mid) <= m){
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return left;
};


function subArraynum(nums: number[], sum: number): number{
  let res = 0;
  let acc = 0;
  for(let i = 0; i < nums.length; i++){
    acc = acc + nums[i];
    if(i == nums.length - 1){
      if(acc > sum){
        res = res +2;
      }else{
        res = res +1;
      }
      break;
    }
    if(acc > sum){
      res = res +1;
      acc = nums[i];
    }
  }
  
  return res;
  
}
// @lc code=end

