/*
 * @lc app=leetcode id=96 lang=typescript
 *
 * [96] Unique Binary Search Trees
 */
// @lc code=start
function numTrees(n) {
    return count(1, n);
}
;
var note = new Map();
function count(low, high) {
    if (low >= high) {
        return 1;
    }
    var key = "".concat(low, ",").concat(high);
    if (note.has(key)) {
        return note.get(key);
    }
    var res = 0;
    for (var i = low; i <= high; i++) {
        var left_1 = count(low, i - 1);
        var right = count(i + 1, high);
        res = left_1 * right + res;
    }
    note.set(key, res);
    return res;
}
// @lc code=end
//# sourceMappingURL=96.unique-binary-search-trees.js.map