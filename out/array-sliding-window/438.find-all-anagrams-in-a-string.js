/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */
// @lc code=start
/// use map + "valid length" to determine if target found
function findAnagrams(s, p) {
    var left = 0;
    var right = 0;
    var expectedMap = new Map();
    var currentMap = new Map();
    var res = [];
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var el = p_1[_i];
        expectedMap.set(el, expectedMap.has(el) ? (expectedMap.get(el) + 1) : 1);
    }
    var valid = 0;
    while (right < s.length) {
        var d = s[right];
        currentMap.set(d, currentMap.has(d) ? (currentMap.get(d) + 1) : 1);
        if (expectedMap.has(d) && currentMap.get(d) <= expectedMap.get(d)) {
            valid++;
        }
        right++;
        while (valid == p.length) {
            if (right - left == p.length) {
                res.push(left);
            }
            var lChar = s[left];
            currentMap.set(lChar, currentMap.get(lChar) - 1);
            if (expectedMap.has(lChar) && currentMap.get(lChar) < expectedMap.get(lChar)) {
                valid--;
            }
            left++;
        }
    }
    return res;
}
;
// @lc code=end
//# sourceMappingURL=438.find-all-anagrams-in-a-string.js.map