/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let res= 0;
  for(let i = 0; i< prices.length - 1; i++){
    if(prices[i] < prices[i+1]){
      res = prices[i+1] -prices[i] + res;
    }
  }
  return res;
};
// @lc code=end

