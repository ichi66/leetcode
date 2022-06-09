/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */
// @lc code=start]
// Approach One: two pointers
// function twoSum(nums: number[], target: number): number[] {
//   let a: number[] = JSON.parse(JSON.stringify(nums));
//   nums.sort(function(a, b){return a - b});
//   let i = 0;
//   let j = nums.length - 1;
//   while (i < j) {
//     if (nums[i] + nums[j] == target) {
//       return [a.indexOf(nums[i]), a.lastIndexOf(nums[j])];
//     } else if (nums[i] + nums[j] < target) {
//       i = i + 1;
//     } else {
//       j = j - 1;
//     }
//   }
//   return [0, 0];
// };
// Approach Two: two-pass hash table
// function twoSum(nums: number[], target: number): number[] {
//   let tempMap = new Map();
//   for(let i = 0; i< nums.length; i ++){
//     tempMap.set(nums[i], i);
//     // tempMap[nums[i]] = i;
//   }
//   for (const [key, value] of tempMap) {
//     let complement = target - key;
//     if(tempMap.has(complement) && tempMap.get(complement) !== value){
//       return [value, tempMap.get(complement)];
//     }
//   }
//   return [0, 0];
// };
// Approach three: one-pass hash table
function twoSum(nums, target) {
    var comp = {};
    for (var i = 0; i < nums.length; i++) {
        if (comp[nums[i]] != undefined) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
}
;
// console.log(twoSum([3,2,4],6));
// @lc code=end
//# sourceMappingURL=1.two-sum.js.map