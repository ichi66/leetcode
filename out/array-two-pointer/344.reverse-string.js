/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */
// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        var temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }
}
;
// @lc code=end
//# sourceMappingURL=344.reverse-string.js.map