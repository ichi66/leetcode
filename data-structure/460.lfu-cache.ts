/*
 * @lc app=leetcode id=460 lang=typescript
 *
 * [460] LFU Cache
 */

// @lc code=start
class LFUCache {
    capacity : number =0 ;
    minFreq: number = 1;
    size: number = 0;
    keyToVal:  Map<number, number>;
    keyToFrq : Map<number, number>;
    freqToKey: Map<number, Set<number>>;
    constructor(capacity: number) {
      this.capacity = capacity;
      this.keyToVal = new Map();
      this.keyToFrq = new Map();
      this.freqToKey =  new Map();
    }

    get(key: number): number {
      /// exist, return val and update freq;
      if(this.keyToVal.has(key)){
        this.increaseFreq(key);
        return this.keyToVal.get(key);
      }
      /// not exits, return -1
      return -1;

    }

    put(key: number, value: number): void {
      /// avoid 0 capacity condition
      if(this.capacity == 0){
        return;
      }
      /// exist, update val and update freq;
      if(this.keyToVal.has(key)){
        this.increaseFreq(key);
        this.keyToVal.set(key,value);
        return;
      }
      /// not exist, then insert value and check if size is larger than cap;
      this.size++;

      /// first delete 
      if(this.size > this.capacity){
        this.deleteLFU();
      }
      /// then add new
      this.keyToVal.set(key,value);
      this.increaseFreq(key);
      this.minFreq = 1;

    }


    deleteLFU(): void{
      if(!this.freqToKey.has(this.minFreq)){
        return;
      }
      this.size--;
      let minFreqMap = this.freqToKey.get(this.minFreq);
      let key = null;
      for (let k of minFreqMap) {
        minFreqMap.delete(k);
        key = k;
        /// only delete the first key
        break;
      }
      this.keyToFrq.delete(key);
      this.keyToVal.delete(key);

    }

    increaseFreq(key: number){
      let prevFreq = this.keyToFrq.has(key) ? this.keyToFrq.get(key)  : 0;
      let newFreq = prevFreq + 1;
      this.keyToFrq.set(key,  prevFreq + 1);

      /// delete key from prevFreq map in freqToKey map
      if(prevFreq > 0){
        const freqMap = this.freqToKey.get(prevFreq);
        freqMap.delete(key);
      }

      // / add key to newFreq map in freqToKey map
      if(!this.freqToKey.has(newFreq)){
        this.freqToKey.set(newFreq, new Set<number>());
      }
      this.freqToKey.get(newFreq).add(key);

      // only update freq here
      if(prevFreq ==  this.minFreq && this.freqToKey.get(prevFreq).size == 0){
        this.minFreq = newFreq;
      }
      
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

