/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res = [];
  const used = new Array(nums.length).fill(false);
  const track = [];
  const backtracking = () => {
    if(track.length == nums.length){
      res.push([...track]);
      return;
    }
    for(let i = 0; i < nums.length; i++){
      if(used[i]){
        continue;
      }
      used[i] = true;
      track.push(nums[i]);
      backtracking();
      used[i] = false;
      track.pop();
    }
  }
  backtracking();
  return res;
};



// @lc code=end

