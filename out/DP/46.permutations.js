/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// @lc code=start
function permute(nums) {
    var res = [];
    var used = new Array(nums.length).fill(false);
    var track = [];
    var backtracking = function () {
        if (track.length == nums.length) {
            res.push(__spreadArray([], track, true));
            return;
        }
        for (var i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            used[i] = true;
            track.push(nums[i]);
            backtracking();
            used[i] = false;
            track.pop();
        }
    };
    backtracking();
    return res;
}
;
// @lc code=end
//# sourceMappingURL=46.permutations.js.map