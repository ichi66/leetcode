/*
 * @lc app=leetcode id=870 lang=typescript
 *
 * [870] Online Stock Span
 */

// @lc code=start

class CusNode{
  index: number;
  val: number;
  constructor(index, val){
    this.index = index;
    this.val = val;
  }
}


function advantageCount(nums1: number[], nums2: number[]): number[] {
  let reconsNum2 = [];
  const length = nums1.length;
  // sort nums2, but also record the original index 
  for(let i = 0; i <nums2.length; i++){
    reconsNum2.push(new CusNode(i, nums2[i]));
  }

  reconsNum2.sort((a,b) => b.val - a.val); /// smallest to largest ? 
  nums1.sort((a,b) => b-a); /// smallest to largest
  let left  = 0;
  let right = length-1;
  let res = new Array(length);
  for(let i = 0; i < length; i++){
    if(nums1[left] > reconsNum2[i].val){
      res[reconsNum2[i].index] = nums1[left]
      left++;
    }else{
      res[reconsNum2[i].index] = nums1[right]
      right--;
    }
  }

  return res;
};



// @lc code=end

