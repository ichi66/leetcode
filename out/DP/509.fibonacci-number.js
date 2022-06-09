/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Partition Array Into Three Parts With Equal Sum
 */
// @lc code=start
function fib(n) {
    if (n == 0) {
        return 0;
    }
    var dp1 = 1;
    var dp2 = 1;
    if (n < 2) {
        return 1;
    }
    for (var i = 3; i < n + 1; i++) {
        var temp = dp2;
        dp2 = dp1 + dp2;
        dp1 = temp;
    }
    return dp2;
}
;
// function fib(n: number): number {
//   const backUp =  new Map<number, number>();
//   const dp = (n : number) : number => {
//     if(n == 0){
//       return 0;
//     }
//     if(n == 1 || n==2){
//       return 1;
//     }
//     if(backUp.has(n)){
//       return backUp.get(n);
//     }
//     let res = dp(n-1) + dp(n-2);
//     backUp.set(n, res);
//     return res;
//   }
//   return dp(n);
// };
// @lc code=end
//# sourceMappingURL=509.fibonacci-number.js.map