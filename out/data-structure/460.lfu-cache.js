/*
 * @lc app=leetcode id=460 lang=typescript
 *
 * [460] LFU Cache
 */
// @lc code=start
var LFUCache = /** @class */ (function () {
    function LFUCache(capacity) {
        this.capacity = 0;
        this.minFreq = 1;
        this.size = 0;
        this.capacity = capacity;
        this.keyToVal = new Map();
        this.keyToFrq = new Map();
        this.freqToKey = new Map();
    }
    LFUCache.prototype.get = function (key) {
        /// exist, return val and update freq;
        if (this.keyToVal.has(key)) {
            this.increaseFreq(key);
            return this.keyToVal.get(key);
        }
        /// not exits, return -1
        return -1;
    };
    LFUCache.prototype.put = function (key, value) {
        /// avoid 0 capacity condition
        if (this.capacity == 0) {
            return;
        }
        /// exist, update val and update freq;
        if (this.keyToVal.has(key)) {
            this.increaseFreq(key);
            this.keyToVal.set(key, value);
            return;
        }
        /// not exist, then insert value and check if size is larger than cap;
        this.size++;
        /// first delete 
        if (this.size > this.capacity) {
            this.deleteLFU();
        }
        /// then add new
        this.keyToVal.set(key, value);
        this.increaseFreq(key);
        this.minFreq = 1;
    };
    LFUCache.prototype.deleteLFU = function () {
        if (!this.freqToKey.has(this.minFreq)) {
            return;
        }
        this.size--;
        var minFreqMap = this.freqToKey.get(this.minFreq);
        var key = null;
        for (var _i = 0, minFreqMap_1 = minFreqMap; _i < minFreqMap_1.length; _i++) {
            var k = minFreqMap_1[_i];
            minFreqMap.delete(k);
            key = k;
            /// only delete the first key
            break;
        }
        this.keyToFrq.delete(key);
        this.keyToVal.delete(key);
    };
    LFUCache.prototype.increaseFreq = function (key) {
        var prevFreq = this.keyToFrq.has(key) ? this.keyToFrq.get(key) : 0;
        var newFreq = prevFreq + 1;
        this.keyToFrq.set(key, prevFreq + 1);
        /// delete key from prevFreq map in freqToKey map
        if (prevFreq > 0) {
            var freqMap = this.freqToKey.get(prevFreq);
            freqMap.delete(key);
        }
        // / add key to newFreq map in freqToKey map
        if (!this.freqToKey.has(newFreq)) {
            this.freqToKey.set(newFreq, new Set());
        }
        this.freqToKey.get(newFreq).add(key);
        // only update freq here
        if (prevFreq == this.minFreq && this.freqToKey.get(prevFreq).size == 0) {
            this.minFreq = newFreq;
        }
    };
    return LFUCache;
}());
/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
//# sourceMappingURL=460.lfu-cache.js.map