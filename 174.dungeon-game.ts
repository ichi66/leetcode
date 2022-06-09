/*
 * @lc app=leetcode id=174 lang=typescript
 *
 * [174] Dungeon Game
 */

// @lc code=start
function calculateMinimumHP(dungeon: number[][]): number {
  if (dungeon.length == 0) {
    return 1;
  }
  let m = dungeon.length;
  let n = dungeon[0].length;
  const dpTable = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dpTable[i] = new Array(n + 1).fill(1);
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i == m - 1 || j == n - 1) {
        let res = Math.max(dpTable[i][j + 1] - dungeon[i][j], dpTable[i + 1][j] - dungeon[i][j]);
        dpTable[i][j] = res > 0 ? res : 1;
      } else {
        let res = Math.min(dpTable[i][j + 1] - dungeon[i][j], dpTable[i + 1][j] - dungeon[i][j]);
        dpTable[i][j] = res > 0 ? res : 1;
      }
    }
  }

  return dpTable[0][0];
};
// @lc code=end

