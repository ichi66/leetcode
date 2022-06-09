/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */
// @lc code=start
var NumArray = /** @class */ (function () {
    function NumArray(nums) {
        this.preSum = [];
        this.oriNum = [];
        this.preSum.push(0);
        this.oriNum = nums;
        for (var i = 0; i < this.oriNum.length; i++) {
            this.preSum.push(this.preSum[i] + this.oriNum[i]);
        }
    }
    NumArray.prototype.sumRange = function (left, right) {
        return this.preSum[right + 1] - this.preSum[left];
    };
    return NumArray;
}());
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
//# sourceMappingURL=303.range-sum-query-immutable.js.map