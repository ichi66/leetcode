/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
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
function nextGreaterElement(nums1, nums2) {
    var _a;
    var monoStack = new Stack();
    var greaterMap = new Map();
    for (var n = nums2.length - 1; n >= 0; n--) {
        while (!monoStack.isEmpty() && monoStack.peek() <= nums2[n]) {
            monoStack.pop();
        }
        greaterMap.set(nums2[n], (_a = monoStack.peek()) !== null && _a !== void 0 ? _a : -1);
        monoStack.push(nums2[n]);
    }
    console.log('monoStack: ', monoStack);
    console.log('greaterMap: ', greaterMap);
    var res = [];
    for (var n = 0; n < nums1.length; n++) {
        res.push(greaterMap.get(nums1[n]));
    }
    return res;
}
;
// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   let greater : number[] =  [];
//   let Monostack: number[] = [];
//   for(let n = nums2.length -1; n>=0 ; n--){
//     while(Monostack.length > 0 && Monostack[Monostack.length-1] <= nums2[n]){
//       Monostack.pop();
//     }
//     greater.unshift(Monostack.length > 0 ?Monostack[Monostack.length-1] : -1);
//     Monostack.push(nums2[n]);
//   }
//   let res = [];
//   for(let i = 0; i < nums1.length; i++){
//     const index = nums2.indexOf(nums1[i]);
//     res.push(greater[index]); 
//   }
//   return res;
// };
// @lc code=end
//# sourceMappingURL=496.next-greater-element-i.js.map