/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }
  let min = Infinity;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      continue;
    }
    res = Math.max(res, prices[i] - min);
  }

  return res;
};
// @lc code=end

