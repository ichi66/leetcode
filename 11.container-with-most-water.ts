/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max: number = 0;
  let i: number = 0;
  let j: number = height.length - 1;
  while (i < j) {
    let longSide: number = Math.min(height[i], height[j]);
    max = Math.max(longSide * (j - i), max);
    if (height[j] < height[i]) {
      j--;
    } else {
      i++
    }

  }
  return max;
};
// @lc code=end

