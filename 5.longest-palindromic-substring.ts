/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    let s1 = getPalindromic(s, i, i);
    if (s1.length > ans.length) {
      ans = s1;
    }

    let s2 = getPalindromic(s, i, i + 1);
    if (s2.length > ans.length) {
      ans = s2;
    }

  }

  return ans;

};


function getPalindromic(s: string, l: number, r: number) {
  if (s[l] != s[r] || r >= s.length || l > r) {
    return ''
  }

  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
  }
  return s.substring(l+1, r); /// 越界也没关系，js自己有保护机制
}
// @lc code=end

