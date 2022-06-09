/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */
// @lc code=start
var Stack = /** @class */ (function () {
    function Stack() {
        this.innerList = new Array();
    }
    // Stack(){
    //   this.innerList = new Array<V>();
    // }
    Stack.prototype.push = function (v) {
        this.innerList.push(v);
    };
    Stack.prototype.pop = function () {
        this.innerList.pop();
    };
    Stack.prototype.peek = function () {
        if (this.innerList.length > 0) {
            return this.innerList[this.innerList.length - 1];
        }
        return null;
    };
    Stack.prototype.size = function () {
        return this.innerList.length;
    };
    Stack.prototype.isEmpty = function () {
        return this.innerList.length == 0;
    };
    return Stack;
}());
function dailyTemperatures(temperatures) {
    var monoStack = new Stack();
    var res = [];
    for (var n = temperatures.length - 1; n >= 0; n--) {
        while (!monoStack.isEmpty() && temperatures[monoStack.peek()] <= temperatures[n]) {
            monoStack.pop();
        }
        res.unshift(monoStack.peek() - n > 0 ? monoStack.peek() - n : 0);
        monoStack.push(n);
    }
    return res;
}
;
// @lc code=end
//# sourceMappingURL=739.daily-temperatures.js.map