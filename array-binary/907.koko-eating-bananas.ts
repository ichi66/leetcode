/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] coco eating bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let right = Math.max(...piles);
  let left  = 1; // min speed

  const hourUsed = speed => piles.reduce((sum, pile) => Math.ceil(pile/speed) +sum, 0);
  while(left <= right){
    const mid = left + Math.floor((right-left)/2);
    if(hourUsed(mid) == h){
      right = mid -1;
    }else if(hourUsed(mid) > h){
      left = mid +1;
    }else{
      right = mid - 1;
    }
    
  }
  return left;
  
};
