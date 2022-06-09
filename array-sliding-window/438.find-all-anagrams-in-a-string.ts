/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/// use map + "valid length" to determine if target found
function findAnagrams(s: string, p: string): number[] {
 let left = 0;
 let right = 0;
 let expectedMap =  new Map<string, number>();
 let currentMap = new Map<string, number>();
 let res: number[] = [];
  for(let el of p){
    expectedMap.set(el, expectedMap.has(el) ? (expectedMap.get(el) + 1) : 1);
  }
  let valid = 0;
  while(right < s.length){
    const d = s[right];
    currentMap.set(d, currentMap.has(d) ? (currentMap.get(d) + 1) : 1);
    if( expectedMap.has(d) && currentMap.get(d) <= expectedMap.get(d)){
      valid++;
    }
    right++;
    while(valid == p.length){
      if(right-left == p.length){
        res.push(left);
      }
      const lChar = s[left];
      currentMap.set(lChar, currentMap.get(lChar) -1);
      if(expectedMap.has(lChar) && currentMap.get(lChar) < expectedMap.get(lChar)){
        valid--;
      }
      left++;
    }
  }
  return res;

};
// @lc code=end

