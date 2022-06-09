/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */
// @lc code=start
var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.stack1 = [];
        this.stack2 = [];
    }
    MyQueue.prototype.push = function (x) {
        this.stack1.push(x);
    };
    MyQueue.prototype.pop = function () {
        this.moveToStack2();
        var res = this.stack2.pop();
        this.moveBack();
        return res;
    };
    MyQueue.prototype.moveToStack2 = function () {
        while (this.stack1.length != 0) {
            this.stack2.push(this.stack1.pop());
        }
    };
    MyQueue.prototype.moveBack = function () {
        while (this.stack2.length != 0) {
            this.stack1.push(this.stack2.pop());
        }
    };
    MyQueue.prototype.peek = function () {
        this.moveToStack2();
        var res = this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : null;
        this.moveBack();
        return res;
    };
    MyQueue.prototype.empty = function () {
        return this.stack1.length == 0;
    };
    return MyQueue;
}());
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
//# sourceMappingURL=232.implement-queue-using-stacks.js.map