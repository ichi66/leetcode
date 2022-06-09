/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */
// @lc code=start
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.queue1 = [];
        this.queue2 = [];
    }
    MyStack.prototype.push = function (x) {
        this.queue1.unshift(x);
    };
    MyStack.prototype.pop = function () {
        this.moveToQ2();
        var res = this.queue2.pop();
        this.moveToQ1();
        return res;
    };
    MyStack.prototype.moveToQ2 = function () {
        while (this.queue1.length > 0) {
            this.queue2.unshift(this.queue1.pop());
        }
    };
    MyStack.prototype.moveToQ1 = function () {
        while (this.queue2.length > 0) {
            this.queue1.unshift(this.queue2.pop());
        }
    };
    MyStack.prototype.top = function () {
        this.moveToQ2();
        var res = this.queue2.length > 0 ? this.queue2[this.queue2.length - 1] : null;
        this.moveToQ1();
        return res;
    };
    MyStack.prototype.empty = function () {
        return this.queue1.length === 0;
    };
    return MyStack;
}());
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
//# sourceMappingURL=225.implement-stack-using-queues.js.map