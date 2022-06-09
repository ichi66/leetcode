/*
 * @lc app=leetcode id=380 lang=typescript
 *
 * [380] Insert Delete GetRandom O(1)
 */
// @lc code=start
var RandomizedSet = /** @class */ (function () {
    function RandomizedSet() {
        this.map = new Map();
        this.list = new Array();
    }
    RandomizedSet.prototype.insert = function (val) {
        if (this.map.has(val)) {
            return false;
        }
        var index = this.list.length;
        this.map.set(val, index);
        this.list.push(val);
        return true;
    };
    RandomizedSet.prototype.remove = function (val) {
        if (!this.map.has(val)) {
            return false;
        }
        var index = this.map.get(val);
        var lastVal = this.list[this.list.length - 1];
        this.list[this.list.length - 1] = val;
        this.list[index] = lastVal;
        this.map.set(lastVal, index);
        this.map.delete(val);
        this.list.pop();
        return true;
    };
    RandomizedSet.prototype.getRandom = function () {
        var rand = Math.floor(Math.random() * this.list.length);
        return this.list[rand];
    };
    return RandomizedSet;
}());
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
//# sourceMappingURL=380.insert-delete-get-random-o-1.js.map