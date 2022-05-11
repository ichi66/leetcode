/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left : number = 0;
  let right : number = s.length-1;
  while(left < right){
    let temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    left++;
    right--;
  }

};
// @lc code=end

