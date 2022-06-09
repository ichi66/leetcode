/*
 * @lc app=leetcode id=528 lang=typescript
 *
 * [528] Random Pick with Weight
 */
// @lc code=start
var Solution = /** @class */ (function () {
    function Solution(w) {
        this.presum = new Array(w.length + 1);
        this.presum[0] = 0;
        for (var i = 1; i < this.presum.length; i++) {
            this.presum[i] = this.presum[i - 1] + w[i - 1];
        }
    }
    Solution.prototype.pickIndex = function () {
        var rand = this.getRandomNum(this.presum[this.presum.length - 1]) + 1; // [1, this.presum[-1]]
        return this.findLeftBound(this.presum, rand) - 1; // presum index is 1-to-right of w
    };
    Solution.prototype.getRandomNum = function (max) {
        return Math.floor(Math.random() * max);
    };
    Solution.prototype.findLeftBound = function (nums, target) {
        var left = 0;
        var right = nums.length - 1;
        while (left <= right) {
            var mid = left + Math.floor((right - left) / 2);
            if (nums[mid] == target) {
                right = mid - 1; // move right window
            }
            else if (nums[mid] > target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return left;
    };
    return Solution;
}());
// class Solution {
//   preSum : number[];
//   constructor(w: number[]) {
//     this.preSum = new Array(w.length + 1);
//     this.preSum[0] = 0;
//     for(let i = 1; i < this.preSum.length; i++){
//       this.preSum[i] = this.preSum[i-1] + w[i-1];
//     }
//   }
//   pickIndex(): number {
//       const rand = this.getRandomNum(this.preSum[this.preSum.length - 1]) + 1;
//       console.log(rand);
//       return this.findLeftBound(this.preSum, rand) -1;
//   }
//   getRandomNum(max: number): number{
//     return Math.floor(Math.random() * max);
//   }
//   findLeftBound(nums: number[], target: number){
//     let left = 0;
//     let right = nums.length - 1;
//     while(left <= right){
//       const mid = left + Math.floor((right-left)/2);
//       if(nums[mid] == target){
//           right = mid - 1;
//          }else if(nums[mid] < target){
//            left = mid +1
//          }else if(nums[mid] > target){
//            right = mid - 1;
//          }
//     }
//     return left;
//   }
// }
// @lc code=end
//# sourceMappingURL=912.random-pick-with-weight.js.map