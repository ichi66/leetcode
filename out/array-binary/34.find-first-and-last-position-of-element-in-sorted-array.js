/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
// @lc code=start
function searchRange(nums, target) {
    var l = getLeftBound(nums, target);
    var r = getRightBound(nums, target);
    return [l, r];
}
;
function getLeftBound(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            right = mid - 1; // 锁定右边界
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    if (left >= nums.length || nums[left] != target) {
        return -1;
    }
    return left;
}
function getRightBound(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            left = mid + 1; // 锁定右边界
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    if (right < 0 || nums[right] != target) {
        return -1;
    }
    return right;
}
// @lc code=end
//# sourceMappingURL=34.find-first-and-last-position-of-element-in-sorted-array.js.map