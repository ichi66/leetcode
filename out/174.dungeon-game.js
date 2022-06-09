/*
 * @lc app=leetcode id=174 lang=typescript
 *
 * [174] Dungeon Game
 */
// @lc code=start
function calculateMinimumHP(dungeon) {
    if (dungeon.length == 0) {
        return 1;
    }
    var m = dungeon.length;
    var n = dungeon[0].length;
    var dpTable = new Array(m + 1);
    for (var i = 0; i < m + 1; i++) {
        dpTable[i] = new Array(n + 1).fill(1);
    }
    for (var i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            if (i == m - 1 || j == n - 1) {
                var res = Math.max(dpTable[i][j + 1] - dungeon[i][j], dpTable[i + 1][j] - dungeon[i][j]);
                dpTable[i][j] = res > 0 ? res : 1;
            }
            else {
                var res = Math.min(dpTable[i][j + 1] - dungeon[i][j], dpTable[i + 1][j] - dungeon[i][j]);
                dpTable[i][j] = res > 0 ? res : 1;
            }
        }
    }
    return dpTable[0][0];
}
;
// @lc code=end
//# sourceMappingURL=174.dungeon-game.js.map