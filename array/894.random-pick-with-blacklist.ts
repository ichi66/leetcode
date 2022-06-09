/*
 * @lc app=leetcode id=710 lang=typescript
 *
 * [710] All Possible Full Binary Trees
 */

// @lc code=start



class Solution {
  map: Map<number,number> = new Map();
  totalLength: number;
  constructor(n: number, blacklist: number[]) {
    this.totalLength = n;
    for(let el of blacklist){
      this.map.set(el,el);
    }
    let lastIndex = n-1;
    let lastRange = n - blacklist.length;
    for(let el of blacklist){
      if(el >= lastRange){
        continue;
      }
      while(this.map.has(lastIndex)){
        lastIndex--;
      }
      this.map.set(el, lastIndex);
      lastIndex--;
    }
  }

  pick(): number {
    const rand = Math.floor(Math.random() * (this.totalLength - this.map.size));
    if(this.map.has(rand)){
      return this.map.get(rand);
    }
    return rand;
  }
}





// class Solution {
//   whitelist: number[] = new Array();
//   constructor(n: number, blacklist: number[]) {
//     blacklist.sort((a,b) => a-b);
//     let left = 0;
//     for(let i = 0; i < n; i++){
//       if(i == blacklist[left]){
//         left++;
//         continue
//       }
//       this.whitelist.push(i);
//     }
//   }

//   pick(): number {
//     const rand = Math.floor(Math.random() * this.whitelist.length);
//     return this.whitelist[rand];
//   }
// }

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n, blacklist)
* var param_1 = obj.pick()
*/
// @lc code=end

