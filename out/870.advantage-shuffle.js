/*
 * @lc app=leetcode id=870 lang=typescript
 *
 * [870] Online Stock Span
 */
// @lc code=start
var CusNode = /** @class */ (function () {
    function CusNode(index, val) {
        this.index = index;
        this.val = val;
    }
    return CusNode;
}());
function advantageCount(nums1, nums2) {
    var reconsNum2 = [];
    var length = nums1.length;
    // sort nums2, but also record the original index 
    for (var i = 0; i < nums2.length; i++) {
        reconsNum2.push(new CusNode(i, nums2[i]));
    }
    reconsNum2.sort(function (a, b) { return b.val - a.val; }); /// smallest to largest ? 
    nums1.sort(function (a, b) { return b - a; }); /// smallest to largest
    var left = 0;
    var right = length - 1;
    var res = new Array(length);
    for (var i = 0; i < length; i++) {
        if (nums1[left] > reconsNum2[i].val) {
            res[reconsNum2[i].index] = nums1[left];
            left++;
        }
        else {
            res[reconsNum2[i].index] = nums1[right];
            right--;
        }
    }
    return res;
}
;
// @lc code=end
//# sourceMappingURL=870.advantage-shuffle.js.map