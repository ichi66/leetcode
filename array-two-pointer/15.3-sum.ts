/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start

/// 将array进行排序后，使用三个指针做题解
/// 第一个指针正常递增
/// 第二三个指针互相逼近
function threeSum(nums: number[]): number[][] {
  let answer: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let start = 0; start < nums.length - 2; start++) {
    if(nums[start] === nums[start-1]){
      continue;
    }
    let end = nums.length - 1;
    let middle = start + 1;
    while (middle < end) {
      if (nums[start] + nums[middle] + nums[end] == 0) {
        answer.push([nums[start], nums[middle], nums[end]]);
        while(nums[middle] === nums[middle +1]) middle++;
        while(nums[end] === nums[end -1]) end --;
        end --
        middle++
      }else if(nums[start] + nums[middle] + nums[end] < 0){
        middle++
      }else{
        end --
      }
    }
  }
  return answer;
};
// @lc code=end

