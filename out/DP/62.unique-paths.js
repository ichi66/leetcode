/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */
// @lc code=start
function uniquePaths(m, n) {
    if (m == 0 || n == 0) {
        return 0;
    }
    if (m == 1 || n == 1) {
        return 1;
    }
    var twoDArray = new Array(m);
    for (var i = 0; i < twoDArray.length; i++) {
        twoDArray[i] = new Array(n);
        if (i == 0) {
            twoDArray[i].fill(1);
        }
        twoDArray[i][0] = 1;
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            twoDArray[i][j] = twoDArray[i - 1][j] + twoDArray[i][j - 1];
        }
    }
    return twoDArray[m - 1][n - 1];
}
;
// @lc code=end
//# sourceMappingURL=62.unique-paths.js.map