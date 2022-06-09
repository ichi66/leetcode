/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
// @lc code=start
function maxProfit(prices) {
    var res = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            res = prices[i + 1] - prices[i] + res;
        }
    }
    return res;
}
;
// @lc code=end
//# sourceMappingURL=122.best-time-to-buy-and-sell-stock-ii.js.map