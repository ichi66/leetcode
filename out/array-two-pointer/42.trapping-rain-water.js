/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */
// @lc code=start
function trap(height) {
    var answer = 0;
    var left = 0;
    var right = height.length - 1;
    var leftMax = 0;
    var rightMax = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            leftMax = Math.max(height[left], leftMax);
            if (height[left] < leftMax) {
                answer = answer + leftMax - height[left];
            }
            left++;
        }
        else {
            rightMax = Math.max(height[right], rightMax);
            if (height[right] < rightMax) {
                answer = answer + rightMax - height[right];
            }
            right--;
        }
    }
    return answer;
}
;
// console.log(trap([9,6,8,8,5,6,3]));
// @lc code=end
//# sourceMappingURL=42.trapping-rain-water.js.map