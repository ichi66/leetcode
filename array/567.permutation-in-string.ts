/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  const targetLength = s1.length;
  const targetMap = new Map<string, number>();
  const curMap = new Map<string, number>();
  let curValid = 0;
  for(let el of s1){
    targetMap.set(el, targetMap.has(el) ? (targetMap.get(el) + 1) : 1)
  }

  let left = 0;
  let right = 0;
  while(right  < s2.length){
    const d = s2[right];
    if(targetMap.has(d)){
      curMap.set(d, curMap.has(d) ?  curMap.get(d) + 1 : 1);
      if( curMap.get(d) <= targetMap.get(d) ){
        curValid++;
      }
    }
    right++;
    while(curValid === targetLength){
      if(right-left === targetLength){
        return true;
      }
      const e = s2[left];
      if(targetMap.has(e)){
        curMap.set(e, curMap.get(e) - 1 );
        if( curMap.get(e) < targetMap.get(e) ){
          curValid--;
        }
      }
      left++;
    }

  }


  return false;


};
// @lc code=end

