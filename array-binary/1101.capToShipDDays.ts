/*
 * @lc app=leetcode id=1101 lang=typescript
 *
 * [1101] cap to ship within d days
 */

// @lc code=start


function shipWithinDays(weights: number[], days: number): number {
  let right = weights.reduce((a,b) => a +b, 0);
  let left = Math.max(...weights);
  while(left <= right){
    const mid = left + Math.floor((right-left)/2);
    if(daysUsed(weights,mid) == days){
      right = mid-1;
    }else if(daysUsed(weights,mid) < days){
        right = mid-1;
    }else{
      left = mid +1;
    }
  }
  return left;

};


function daysUsed(weights: number[], cap: number): number{
  let res = 0;
  let acc = 0;
  for(let i = 0; i < weights.length; i++){
    acc = acc + weights[i];
    if(i == weights.length - 1){
      res = acc > cap ? res = res +2 : res = res +1;
      break;
    }
    if(acc > cap){
      res = res +1;
      acc = weights[i];
    }
  }
  return res;
}

// @lc code=end