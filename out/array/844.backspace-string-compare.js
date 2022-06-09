/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */
// @lc code=start
function backspaceCompare(s, t) {
    return buildStr(s) == buildStr(t);
}
;
function buildStr(s) {
    var str = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] != '#') {
            str.push(s[i]);
        }
        else {
            str.pop();
        }
    }
    return str.join();
}
// @lc code=end
//# sourceMappingURL=844.backspace-string-compare.js.map