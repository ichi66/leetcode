/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */
// @lc code=start
function maxEnvelopes(envelopes) {
    var sortedEnvelops = envelopes.sort(function (a, b) { return a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]; });
    var listTocheck = sortedEnvelops.map(function (record) { return record[1]; });
    var lengthOfLIS = function (nums) {
        if (nums.length <= 1) {
            return nums.length;
        }
        var res = new Array(nums.length).fill(1);
        for (var i = 1; i < nums.length; i++) {
            for (var j = i; j >= 0; j--) {
                if (nums[i] > nums[j]) {
                    res[i] = Math.max(res[j] + 1, res[i]);
                }
            }
        }
        return Math.max.apply(Math, res);
    };
    return lengthOfLIS(listTocheck);
}
;
// @lc code=end
//# sourceMappingURL=354.russian-doll-envelopes.js.map