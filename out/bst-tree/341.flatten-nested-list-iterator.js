/*
 * @lc app=leetcode id=341 lang=typescript
 *
 * [341] Flatten Nested List Iterator
 */
// @lc code=start
// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
// class NestedInteger {
//     // If value is provided, then it holds a single integer
//     // Otherwise it holds an empty nested list
//     constructor(value?: number) {
//     };
//     // Return true if this NestedInteger holds a single integer, rather than a nested list.
//     isInteger(): boolean {
//     };
//     // Return the single integer that this NestedInteger holds, if it holds a single integer
//     // Return null if this NestedInteger holds a nested list
//     getInteger(): number | null {
//     };
//     // Set this NestedInteger to hold a single integer equal to value.
//     setInteger(value: number) {
//     };
//     // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
//     add(elem: NestedInteger) {
//     };
//     // Return the nested list that this NestedInteger holds,
//     // or an empty list if this NestedInteger holds a single integer
//     getList(): NestedInteger[] {
//     };
// };
var NestedIterator = /** @class */ (function () {
    function NestedIterator(nestedList) {
        this.data = [];
        this.data = [];
        this.flatten(nestedList);
    }
    NestedIterator.prototype.flatten = function (nestedList) {
        for (var _i = 0, nestedList_1 = nestedList; _i < nestedList_1.length; _i++) {
            var item = nestedList_1[_i];
            if (item.isInteger()) {
                this.data.push(item.getInteger());
            }
            else {
                this.flatten(item.getList());
            }
        }
    };
    NestedIterator.prototype.hasNext = function () {
        return this.data.length > 0;
    };
    NestedIterator.prototype.next = function () {
        var res = this.data.shift();
        return res;
    };
    return NestedIterator;
}());
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
// @lc code=end
//# sourceMappingURL=341.flatten-nested-list-iterator.js.map