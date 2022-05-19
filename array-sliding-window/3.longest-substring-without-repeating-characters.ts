/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start

// answer1: sliding windows
// function lengthOfLongestSubstring(s: string): number {
//   let startIndex : number = 0;
//   let longestLength : number = 0; 
//   let tempList = [];

//   while(startIndex < s.length){
//     for(let i = startIndex; i < s.length; i++){
//       if(tempList.indexOf(s[i]) > -1){
//         longestLength  = Math.max(longestLength, tempList.length);
//         startIndex = startIndex + tempList.indexOf(s[i]) + 1;
//         tempList = [];
//         break;
//       }else{
//         tempList.push(s[i]);
//       }
//     }
//   }
//   return longestLength;
// };


// answer2 
function lengthOfLongestSubstring(s: string): number {
  let startIndex: number = 0;
  let longestLength: number = 0;
  let tempList = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (tempList.has(s[i])) {
      startIndex = Math.max(tempList.get(s[i]) + 1, startIndex);
    }
    tempList.set(s[i], i);
    longestLength = Math.max(longestLength, i - startIndex + 1);
  }
  return longestLength;
};
// console.log(lengthOfLongestSubstring("abcabcbb"))


// function lengthOfLongestSubstring(s: string): number {
//   // keeps track of the most recent index of each letter.
//   const seen = new Map();
//   // keeps track of the starting index of the current substring.
//   let start = 0;
//   // keeps track of the maximum substring length.
//   let maxLen = 0;

//   for (let i = 0; i < s.length; i++) {
//     // if the current char was seen, move the start to (1 + the last index of this char)
//     // max prevents moving backward, 'start' can only move forward
//     if (seen.has(s[i])) {
//       start = Math.max(seen.get(s[i]) + 1, start)
//     }
//     seen.set(s[i], i);
//     // maximum of the current substring length and maxLen
//     maxLen = Math.max(i - start + 1, maxLen);
//   }

//   return maxLen;
// };
// @lc code=end

