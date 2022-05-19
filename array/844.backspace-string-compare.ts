/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  return buildStr(s) == buildStr(t);
};



function buildStr(s: string) : string{

  let str: string[] = [];

  for(let i = 0; i < s.length; i++){
    if(s[i]!='#'){
      str.push(s[i]);
    }else{
      str.pop();
    }
  }
  return str.join();
}
// @lc code=end

