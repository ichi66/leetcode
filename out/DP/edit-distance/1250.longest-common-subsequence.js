/*
 * @lc app=leetcode id=1143 lang=typescript
 *
 * [1143] longest substring
 */
// @lc code=start
// dp table
function longestCommonSubsequence(text1, text2) {
    var dpTable = new Array(text1.length + 1);
    for (var i = 0; i < dpTable.length; i++) {
        dpTable[i] = new Array(text2.length + 1).fill(0);
    }
    for (var i = 1; i < text1.length + 1; i++) {
        for (var j = 1; j < text2.length + 1; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dpTable[i][j] = Math.max(dpTable[i - 1][j - 1]) + 1;
            }
            else {
                dpTable[i][j] = Math.max(dpTable[i - 1][j], dpTable[i][j - 1], dpTable[i - 1][j - 1]);
            }
        }
    }
    return dpTable[text1.length][text2.length];
}
;
// function longestCommonSubsequence(text1: string, text2: string): number {
//   const memo = new Map<string, number>();
//   const dp = (s1: string,i : number, s2 : string, j : number) : number=> {
//     if(i == s1.length || j == s2.length){
//         return 0;
//     }
//     let key = `${i}, ${j}`;
//     if(memo.has(key)){
//       return memo.get(key);
//     }
//     if(s1[i] == s2[j]){
//       memo.set(key, 1 + dp(s1, i+ 1, s2 , j + 1));
//     }else{
//       const case1 = dp(s1, i+ 1, s2 , j);
//       const case2 = dp(s1, i, s2, j + 1);
//       memo.set(key, Math.max(case1, case2));
//     }
//     const res : number  = memo.get(key);
//     return res;
//   }
//   return dp(text1, 0, text2, 0);
// };
// @lc code=end
//# sourceMappingURL=1250.longest-common-subsequence.js.map