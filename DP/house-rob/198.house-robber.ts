/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start

function rob(nums: number[]): number {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  let pre = 0;
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
      let useCurrent = nums[i] + pre;
      let notUseCurrent = cur;
      pre = cur;
      cur = Math.max(useCurrent, notUseCurrent);
  }
  return cur;
};


// function rob(nums: number[]): number {
//   if(nums.length == 0){
//     return 0;
//   }
//   if(nums.length == 1){
//     return nums[0];
//   }
//   let dpArray: number[] = new Array(nums.length + 1);
//   dpArray[0] = 0;
//   dpArray[1] = nums[0];
//   for(let i = 2; i < nums.length +1; i++){
//     dpArray[i] =  Math.max(dpArray[i - 1], nums[i - 1] + dpArray[i-2]);
//   }
//   // console.log(dpArray);
//   return dpArray[nums.length];
// };
// @lc code=end

