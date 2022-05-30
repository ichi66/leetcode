/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
function canPartition(nums: number[]): boolean {

  let sum : number = nums.reduce((a, b) => a +b , 0);
  let halfSum : number =  sum/2;
  if(!Number.isInteger(halfSum)){
    return false;
  }

  let dpTable = new Array(nums.length + 1);
  for(let  i = 0 ; i < dpTable.length; i++){
    dpTable[i] = new Array(halfSum + 1).fill(false);
    dpTable[i][0] = true;
  }  

  for(let i  = 1 ;i< dpTable.length; i++){
    for(let j = 1; j < halfSum +1 ; j++){
      if(nums[i-1] > j){
        dpTable[i][j] = dpTable[i-1][j];
      }else{
        dpTable[i][j] = dpTable[i-1][j] || dpTable[i -1][j - nums[i-1]];
      }
    }
  }

  return dpTable[nums.length][halfSum];



};
// @lc code=end

