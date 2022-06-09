/*
 * @lc app=leetcode id=710 lang=typescript
 *
 * [710] All Possible Full Binary Trees
 */
// @lc code=start
var Solution = /** @class */ (function () {
    function Solution(n, blacklist) {
        this.map = new Map();
        this.totalLength = n;
        for (var _i = 0, blacklist_1 = blacklist; _i < blacklist_1.length; _i++) {
            var el = blacklist_1[_i];
            this.map.set(el, el);
        }
        var lastIndex = n - 1;
        var lastRange = n - blacklist.length;
        for (var _a = 0, blacklist_2 = blacklist; _a < blacklist_2.length; _a++) {
            var el = blacklist_2[_a];
            if (el >= lastRange) {
                continue;
            }
            while (this.map.has(lastIndex)) {
                lastIndex--;
            }
            this.map.set(el, lastIndex);
            lastIndex--;
        }
    }
    Solution.prototype.pick = function () {
        var rand = Math.floor(Math.random() * (this.totalLength - this.map.size));
        if (this.map.has(rand)) {
            return this.map.get(rand);
        }
        return rand;
    };
    return Solution;
}());
// class Solution {
//   whitelist: number[] = new Array();
//   constructor(n: number, blacklist: number[]) {
//     blacklist.sort((a,b) => a-b);
//     let left = 0;
//     for(let i = 0; i < n; i++){
//       if(i == blacklist[left]){
//         left++;
//         continue
//       }
//       this.whitelist.push(i);
//     }
//   }
//   pick(): number {
//     const rand = Math.floor(Math.random() * this.whitelist.length);
//     return this.whitelist[rand];
//   }
// }
/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n, blacklist)
* var param_1 = obj.pick()
*/
// @lc code=end
//# sourceMappingURL=894.random-pick-with-blacklist.js.map