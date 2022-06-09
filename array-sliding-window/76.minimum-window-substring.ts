/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start



// function minWindow(s: string, t: string): string {
//   const expectedLength = t.length;
//   let valid = 0;
//   let expectedCharMap =  new Map<string, number>();
//   let charMap =  new Map<string, number>();
//   let substring = null;
//   for(let el of t){
//     expectedCharMap.set(el, expectedCharMap.has(el) ? (expectedCharMap.get(el) + 1) : 1);
//   }
//   let left = 0;
//   let right = 0;
//   while(right < s.length){
//     const c = s[right];
//     charMap.set(c,  charMap.has(c) ? (charMap.get(c) + 1) : 1 );
//     if(expectedCharMap.has(c) &&  charMap.get(c) <=  expectedCharMap.get(c)){
//       valid++;
//     }
//     right++;
//     while(valid == expectedLength){
//       if(substring  === null || right - left < substring.length){
//         substring = s.substring(left,right);
//       }

//       const d = s[left]
//       charMap.set(d,  charMap.get(d) - 1);
//       if(expectedCharMap.has(d) &&  charMap.get(d) <  expectedCharMap.get(d)){
//         valid--;
//       }
//       left++;
//     }
//   }

//   return substring === null ? '' : substring;
// };





function minWindow(s: string, t: string): string {
  let tCount = new Map<string, number>()
  for (let i = 0; i < t.length; i++) {
    tCount.set(t[i], (tCount.get(t[i]) ?? 0) + 1);
  }

  let required: number = tCount.size; // target num of distinct word 
  let l: number = 0;
  let r: number = 0;
  let formed: number = 0;

  let ans = [-1, 0, 0]; // [size, l,r]

  let windowWordCount = new Map<string, number>();

  while (r < s.length) {
    windowWordCount.set(s[r], (windowWordCount.get(s[r]) ?? 0) + 1);
    if (tCount.has(s[r]) && windowWordCount.get(s[r]) === tCount.get(s[r])) {
      formed++;
    }
    while (l <= r && formed === required) {
      if (ans[0] == -1 || ans[0] > r - l + 1) {
        ans[0] = r - l + 1;
        ans[1] = l;
        ans[2] = r;
      }
      let count = (windowWordCount.get(s[l]) ?? 0) - 1;
      windowWordCount.set(s[l], (windowWordCount.get(s[l]) ?? 0) - 1);

      if (tCount.has(s[l]) && (windowWordCount.get(s[l]) ?? 0) < (tCount.get(s[l]) ?? 0)) {
        formed--;
      }
      l++;
    }
    r++;

  }

  return ans[0] == -1 ? '' : s.substring(ans[1], ans[2] + 1);
};
console.log(minWindow('ADOBECODEBANC', "ABC"));
// @lc code=end

