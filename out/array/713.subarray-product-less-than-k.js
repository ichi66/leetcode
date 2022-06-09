/*
 * @lc app=leetcode id=713 lang=typescript
 *
 * [713] Subarray Product Less Than K
 */
// @lc code=start
function numSubarrayProductLessThanK(nums, k) {
    var left = 0;
    var right = 0;
    var prod = 1;
    var ans = 0;
    if (k <= 1) {
        return 0;
    }
    while (right < nums.length) {
        prod = nums[right] * prod;
        while (prod >= k && left <= right) {
            prod = prod / nums[left];
            left++;
        }
        ans = ans + right - left + 1; // tricky part
        right++;
    }
    return ans;
}
;
// @lc code=end
//# sourceMappingURL=713.subarray-product-less-than-k.js.map