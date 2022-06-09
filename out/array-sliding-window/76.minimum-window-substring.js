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
function minWindow(s, t) {
    var _a, _b, _c, _d, _e, _f;
    var tCount = new Map();
    for (var i = 0; i < t.length; i++) {
        tCount.set(t[i], ((_a = tCount.get(t[i])) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var required = tCount.size; // target num of distinct word 
    var l = 0;
    var r = 0;
    var formed = 0;
    var ans = [-1, 0, 0]; // [size, l,r]
    var windowWordCount = new Map();
    while (r < s.length) {
        windowWordCount.set(s[r], ((_b = windowWordCount.get(s[r])) !== null && _b !== void 0 ? _b : 0) + 1);
        if (tCount.has(s[r]) && windowWordCount.get(s[r]) === tCount.get(s[r])) {
            formed++;
        }
        while (l <= r && formed === required) {
            if (ans[0] == -1 || ans[0] > r - l + 1) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }
            var count_1 = ((_c = windowWordCount.get(s[l])) !== null && _c !== void 0 ? _c : 0) - 1;
            windowWordCount.set(s[l], ((_d = windowWordCount.get(s[l])) !== null && _d !== void 0 ? _d : 0) - 1);
            if (tCount.has(s[l]) && ((_e = windowWordCount.get(s[l])) !== null && _e !== void 0 ? _e : 0) < ((_f = tCount.get(s[l])) !== null && _f !== void 0 ? _f : 0)) {
                formed--;
            }
            l++;
        }
        r++;
    }
    return ans[0] == -1 ? '' : s.substring(ans[1], ans[2] + 1);
}
;
console.log(minWindow('ADOBECODEBANC', "ABC"));
// @lc code=end
//# sourceMappingURL=76.minimum-window-substring.js.map