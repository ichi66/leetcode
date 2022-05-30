/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  if (grid.length == 0) {
    return 0;
  }
  let n = grid.length;
  let m = grid[0].length;

  let dpTable = new Array(n);
  for (let i = 0; i < n; i++) {
    dpTable[i] = new Array(m).fill(0);
  }
  dpTable[0][0] = grid[0][0];
  for (let i = 1; i < n; i++) {
    dpTable[i][0] = grid[i][0] + dpTable[i - 1][0];
  }
  for (let j = 1; j < m; j++) {
    dpTable[0][j] = grid[0][j] + dpTable[0][j - 1];
  }


  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const currentVal = grid[i][j];
      dpTable[i][j] = Math.min(dpTable[i - 1][j] + currentVal, dpTable[i][j - 1] + currentVal);
    }
  }

  return dpTable[n - 1][m - 1];
};

// @lc code=end
