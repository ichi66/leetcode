/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  let answer: number = 0;
  let left: number  = 0;
  let right: number  = height.length - 1;

  let leftMax: number = 0;
  let rightMax: number = 0;

  while(left < right){
    if(height[left] <= height[right]){
      leftMax = Math.max(height[left], leftMax);
      if(height[left] < leftMax) {
        answer = answer + leftMax - height[left];
      }
      left++
    }else{
      rightMax = Math.max(height[right], rightMax);
      if(height[right] < rightMax){
        answer = answer + rightMax -  height[right];
      }
      right -- ;
    }

  }
  return answer;
};




// console.log(trap([9,6,8,8,5,6,3]));
// @lc code=end

