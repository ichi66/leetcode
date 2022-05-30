/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start




function coinChange(coins: number[], amount: number): number {
  let dpTable = new Array(amount +1).fill(Infinity);
  dpTable[0] = 0;
  for(let i = 0; i < dpTable.length; i++){
    for(let coin of coins){
      if(i - coin < 0){
        continue;
      }
      dpTable[i] = Math.min(dpTable[i], dpTable[i -  coin] +1);
    }
  }
  return dpTable[amount] == Infinity  ? -1 : dpTable[amount];

};

// function coinChange(coins: number[], amount: number): number {
//   let memo  = new Map<number, number>();
//   const dp = (coins: number[], amount: number): number => {
//     if (amount < 0) {
//       memo.set(amount,-1);
//       return -1;
//     }
//     if (amount === 0) {
//       memo.set(amount,0);
//       return 0;
//     }
//     if(memo.has(amount)){
//       return memo.get(amount);
//     }
//     let res = Infinity;
//     for (let i = 0; i < coins.length; i++) {
//       const subProb = dp(coins, amount - coins[i]);
//       if (subProb === -1) {
//         continue;
//       }
//       res = Math.min(subProb + 1, res);
//     }
//     res = res === Infinity ? -1 : res;
//     memo.set(amount, res);
//     return res;
//   }

//   return dp(coins, amount);
// };
// @lc code=end

