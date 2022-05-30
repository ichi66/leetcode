/*
 * @lc app=leetcode id=518 lang=typescript
 *
 * [518] Coin Change 2
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
  const dpTable = new Array(coins.length+1);
  for(let  i = 0; i< dpTable.length; i++){
    dpTable[i] =  new Array(amount + 1).fill(0);
    dpTable[i][0] = 1;
  }
  for(let i = 1; i < dpTable.length; i++){
    for(let j = 1; j < amount +1; j++){
      if(coins[i-1] > j){
        dpTable[i][j] = dpTable[i-1][j];
      }else{
        dpTable[i][j] = dpTable[i - 1][j] + dpTable[i][j - coins[i-1]]
      }
    }
  }

  return dpTable[coins.length][amount];

};
// @lc code=end

