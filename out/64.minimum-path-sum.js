/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */
// @lc code=start
function minPathSum(grid) {
    if (grid.length == 0) {
        return 0;
    }
    var n = grid.length;
    var m = grid[0].length;
    var dpTable = new Array(n);
    for (var i = 0; i < n; i++) {
        dpTable[i] = new Array(m).fill(0);
    }
    dpTable[0][0] = grid[0][0];
    for (var i = 1; i < n; i++) {
        dpTable[i][0] = grid[i][0] + dpTable[i - 1][0];
    }
    for (var j = 1; j < m; j++) {
        dpTable[0][j] = grid[0][j] + dpTable[0][j - 1];
    }
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            var currentVal = grid[i][j];
            dpTable[i][j] = Math.min(dpTable[i - 1][j] + currentVal, dpTable[i][j - 1] + currentVal);
        }
    }
    return dpTable[n - 1][m - 1];
}
;
// @lc code=end
//# sourceMappingURL=64.minimum-path-sum.js.map