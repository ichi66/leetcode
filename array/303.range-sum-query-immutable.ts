/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
  private preSum: number[] = [];
  private oriNum: number[] = [];
    constructor(nums: number[]) {
      this.preSum.push(0);
      this.oriNum = nums;
      for(let i = 0; i < this.oriNum.length; i++){
        this.preSum.push(this.preSum[i] + this.oriNum[i]);

      }
    }

    sumRange(left: number, right: number): number {
      return this.preSum[right +1] - this.preSum[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

