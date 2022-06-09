/*
 * @lc app=leetcode id=583 lang=typescript
 *
 * [583] Delete Operation for Two Strings
 */
// @lc code=start
function minDistance(word1, word2) {
    var lcs = longestCommonSubsequence(word1, word2);
    return word1.length - lcs + word2.length - lcs;
}
;
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
// @lc code=end
//# sourceMappingURL=583.delete-operation-for-two-strings.js.map