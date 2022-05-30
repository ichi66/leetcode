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
  const dpTable = new Array(dungeon.length);
  for (let i = 0; i < dpTable.length; i++) {
    dpTable[i] = new Array(dungeon[0].length);
  }

  dpTable[m - 1][n - 1] = 1 - dungeon[m - 1][n - 1] > 0 ? 1 - dungeon[m - 1][n - 1] : 1;

  for (let i = m - 2; i >= 0; i--) {
    dpTable[i][n - 1] = dungeon[i][n - 1] - dpTable[i + 1][n - 1] > 0 ? dungeon[i][n - 1] - dpTable[i + 1][n - 1] : 1;
  }

  for (let j = n - 2; j >= 0; j--) {
    dpTable[m - 1][j] = dungeon[m - 1][j] - dpTable[m - 1][j + 1] > 0 ? dungeon[m - 1][j] - dpTable[m - 1][j + 1] : 1;
  }


  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dpTable[i][j] = dungeon[i][j] - dpTable[i][j + 1] > 0 ? dungeon[i][j] - dpTable[i][j + 1] : 1;
    }
  }


  return dpTable[0][0];


};
// @lc code=end

