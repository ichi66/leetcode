/*
 * @lc app=leetcode id=380 lang=typescript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
class RandomizedSet {
    map : Map<number, number>;
    list: Array<number>;
    constructor() {
      this.map = new Map<number, number>();
      this.list = new Array<number>();
    }

    insert(val: number): boolean {
      if(this.map.has(val)){
        return false;
      }
      const index = this.list.length;
      this.map.set(val, index);
      this.list.push(val);
      return true;
    }

    remove(val: number): boolean {
      if(!this.map.has(val)){
        return false;
      }
      const index = this.map.get(val);
      const lastVal = this.list[this.list.length-1];
      this.list[this.list.length-1] = val;
      this.list[index] = lastVal;
      this.map.set(lastVal, index);
      this.map.delete(val);
      this.list.pop();
      return true;
    }

    getRandom(): number {
      const rand = Math.floor( Math.random() * this.list.length);
      return this.list[rand];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

