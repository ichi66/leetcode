/*
 * @lc app=leetcode id=96 lang=typescript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
function numTrees(n: number): number {
  return count(1,n);
};

let note = new Map<string, number>();

function count(low, high): number{
  if(low >= high){
    return 1;
  }
  let key=  `${low},${high}`;
  if(note.has(key)){
    return note.get(key);
  }
  let res = 0;
  for(let i= low; i <=high; i++){
    let left = count(low, i-1);
    let right = count(i+1, high);
    res = left * right + res;
  }
  note.set(key, res);
  return res;
}

// @lc code=end

