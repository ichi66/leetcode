/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */
// @lc code=start
function checkInclusion(s1, s2) {
    var targetLength = s1.length;
    var targetMap = new Map();
    var curMap = new Map();
    var curValid = 0;
    for (var _i = 0, s1_1 = s1; _i < s1_1.length; _i++) {
        var el = s1_1[_i];
        targetMap.set(el, targetMap.has(el) ? (targetMap.get(el) + 1) : 1);
    }
    var left = 0;
    var right = 0;
    while (right < s2.length) {
        var d = s2[right];
        if (targetMap.has(d)) {
            curMap.set(d, curMap.has(d) ? curMap.get(d) + 1 : 1);
            if (curMap.get(d) <= targetMap.get(d)) {
                curValid++;
            }
        }
        right++;
        while (curValid === targetLength) {
            if (right - left === targetLength) {
                return true;
            }
            var e = s2[left];
            if (targetMap.has(e)) {
                curMap.set(e, curMap.get(e) - 1);
                if (curMap.get(e) < targetMap.get(e)) {
                    curValid--;
                }
            }
            left++;
        }
    }
    return false;
}
;
// @lc code=end
//# sourceMappingURL=567.permutation-in-string.js.map