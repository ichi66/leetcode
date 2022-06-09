/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */
// @lc code=start
function canPartition(nums) {
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    var halfSum = sum / 2;
    if (!Number.isInteger(halfSum)) {
        return false;
    }
    var dpTable = new Array(nums.length + 1);
    for (var i = 0; i < dpTable.length; i++) {
        dpTable[i] = new Array(halfSum + 1).fill(false);
        dpTable[i][0] = true;
    }
    for (var i = 1; i < dpTable.length; i++) {
        for (var j = 1; j < halfSum + 1; j++) {
            if (nums[i - 1] > j) {
                dpTable[i][j] = dpTable[i - 1][j];
            }
            else {
                dpTable[i][j] = dpTable[i - 1][j] || dpTable[i - 1][j - nums[i - 1]];
            }
        }
    }
    return dpTable[nums.length][halfSum];
}
;
// @lc code=end
//# sourceMappingURL=416.partition-equal-subset-sum.js.map