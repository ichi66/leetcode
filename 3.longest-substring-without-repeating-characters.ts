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
  let startIndex : number = 0;
  let longestLength : number = 0; 
  let tempList = new Map<string, number>();

  while(startIndex < s.length){
    let j = 0;
    for(let i = startIndex; i < s.length; i++){
      if(tempList.has(s[i])){
        longestLength  = Math.max(longestLength, tempList.size);
        startIndex = startIndex + (tempList.get(s[i]) ?? 0) + 1;
        tempList = new Map<string, number>();
        break;
      }else{
        tempList.set(s[i],j);
        j = j++;
      }
    }
  }
  return longestLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"))
// @lc code=end

