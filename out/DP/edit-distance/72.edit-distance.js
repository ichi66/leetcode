/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */
// @lc code=start
// dp bottom -  top
function minDistance(word1, word2) {
    /// create dp table
    var dpTable = new Array(word1.length + 1);
    for (var i = 0; i < word1.length + 1; i++) {
        dpTable[i] = new Array(word2.length + 1).fill(0);
        /// init first col
        dpTable[i][0] = i;
    }
    /// init first row
    for (var j = 0; j < word2.length + 1; j++) {
        dpTable[0][j] = j;
    }
    for (var row = 1; row < word1.length + 1; row++) {
        for (var col = 1; col < word2.length + 1; col++) {
            if (word1[row - 1] == word2[col - 1]) {
                dpTable[row][col] = dpTable[row - 1][col - 1];
            }
            else {
                dpTable[row][col] = Math.min(dpTable[row][col - 1] + 1, dpTable[row - 1][col - 1] + 1, dpTable[row - 1][col] + 1);
            }
        }
    }
    return dpTable[word1.length][word2.length];
}
;
// -----recursion ----
// ---- top - down -----
// function minDistance(word1: string, word2: string): number {
//   let memoMap = new Map<string, number>();
//   function dp(word1, word2, i, j): number{
//     if(i == -1){
//       return j + 1;
//     }
//     if(j==-1){
//       return i + 1;
//     }
//     let key  = `${i},${j}`;
//     if(memoMap.has(key)){
//       return memoMap.get(key);
//     }
//     if(word1[i] ==  word2[j]){
//       return dp(word1, word2, i - 1, j - 1);
//     }
//     let sub = dp(word1, word2, i - 1, j - 1) + 1;
//     let del = dp(word1, word2, i - 1, j) + 1;
//     let ins = dp(word1, word2, i, j - 1) + 1;
//     let res = Math.min(sub,del, ins);
//     memoMap.set(key, res);
//     return res;
//   }
//   return dp(word1, word2, word1.length-1, word2.length - 1);
// }
// @lc code=end
//# sourceMappingURL=72.edit-distance.js.map