/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start



function climbStairs(n: number): number {
  if(n < 3){
    return n;
  }
  let dp1 = 1;
  let dp2 = 2;
  for(let i = 3 ; i < n + 1; i++){
    let temp =  dp2;
    dp2 = dp1+ dp2;
    dp1 =  temp;
    
  }
  return dp2;
}



// dptable

// function climbStairs(n: number): number {
//   if(n < 3){
//     return n;
//   }
//   let dpTable = new Array(n+1).fill(0);
//   dpTable[1] = 1;
//   dpTable[2] = 2;
//   for(let i = 3; i < n+1; i++){
//     dpTable[i] = dpTable[i - 1] + dpTable[i-2]
//   }
//   return  dpTable[n];
// }

// recusive

// function climbStairs(n: number): number {
//   let map = new Map<number, number>();
//   map.set(0,0);
//   map.set(1,1);
//   map.set(2,2);
//   const dp = (n : number) => {
//     if(map.has(n)){
//       return map.get(n);
//     }
//     let n1 = climbStairs(n-1);
//     let n2 = climbStairs(n-2);
//     return n1 + n2 ;
//   }
//   return dp(n);
// };
// @lc code=end

