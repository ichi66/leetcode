/*
 * @lc app=leetcode id=712 lang=typescript
 *
 * [712] Minimum ASCII Delete Sum for Two Strings
 */

// @lc code=start
function minimumDeleteSum(s1: string, s2: string): number {
  let dpTable: number[][] = new Array(s1.length +1);
  for(let i = 0; i < s1.length+1; i++){
    dpTable[i] = new Array(s2.length+1).fill(0);
  }
  for(let i = 1; i < s1.length+1; i++){
    dpTable[i][0] =  s1.charCodeAt(i-1) + dpTable[i - 1][0];
  }
  for(let j = 1; j < s2.length +1 ; j++){
    dpTable[0][j] = s2.charCodeAt(j-1) + dpTable[0][j-1];
  }

  for(let row = 1 ; row  < s1.length +1 ; row++ ){

    for(let col = 1; col < s2.length + 1; col++){
      if(s1[row-1] ==  s2[col-1]){
        dpTable[row][col] = dpTable[row - 1][col - 1];
      }else{
        dpTable[row][col] = Math.min(dpTable[row - 1][col] + s1.charCodeAt(row-1) ,dpTable[row ][col - 1] + s2.charCodeAt(col-1) );
      }
    }

  }

  return dpTable[s1.length][s2.length];

};
// @lc code=end

