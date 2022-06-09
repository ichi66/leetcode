/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */
// @lc code=start
function maxArea(height) {
    var max = 0;
    var i = 0;
    var j = height.length - 1;
    while (i < j) {
        var longSide = Math.min(height[i], height[j]);
        max = Math.max(longSide * (j - i), max);
        if (height[j] < height[i]) {
            j--;
        }
        else {
            i++;
        }
    }
    return max;
}
;
// @lc code=end
//# sourceMappingURL=11.container-with-most-water.js.map