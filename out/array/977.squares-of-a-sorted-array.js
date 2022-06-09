/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */
// // @lc code=start
function sortedSquares(nums) {
    var l = 0;
    var r = nums.length - 1;
    var ans = [];
    while (l <= r) {
        if (Math.abs(nums[r]) < Math.abs(nums[l])) {
            ans.push(nums[l] * nums[l]);
            l++;
        }
        else {
            ans.push(nums[r] * nums[r]);
            r--;
        }
    }
    ans.reverse();
    return ans;
}
;
// function sortedSquares(nums: number[]): number[] {
//   let r = -1; // the first index of the number that is larger than 0;
//   let l = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       l = i;
//     }
//     if (nums[i] >= 0) {
//       r = i;
//       break;
//     }
//   }
//   let ans = [];
//   if(l == -1){
//     ans = nums;
//   }
//   if(r == -1){
//    ans = nums.reverse();
//    r=  nums.length;
//   }
//   while (l >= 0 && r < nums.length) {
//     if (Math.abs(nums[l]) > Math.abs(nums[r])) {
//       ans.push(nums[r]);
//       r++;
//     } else {
//       ans.push(nums[l]);
//       l--;
//     }
//     if (r == nums.length) {
//       while (l >= 0) {
//         ans.push(nums[l])
//         l--;
//       };
//     }
//     if (l < 0) {
//       while (r < nums.length) {
//         ans.push(nums[r])
//         r++;
//       }
//     }
//   }
//   for (let i = 0; i < ans.length; i++) {
//     let temp:number = ans[i] * ans[i];
//     ans[i] = temp;
//    }
//   return ans;
// };
// @lc code=end
//# sourceMappingURL=977.squares-of-a-sorted-array.js.map