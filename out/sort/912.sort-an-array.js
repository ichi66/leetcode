/*
 * @lc app=leetcode id=912 lang=typescript
 *
 * [912] Sort an Array
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// @lc code=start
var MergeSort = /** @class */ (function () {
    function MergeSort() {
    }
    MergeSort.sort = function (nums) {
        this.temp = __spreadArray([], nums, true);
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    };
    MergeSort.mergeSort = function (nums, low, high) {
        if (low == high) {
            return;
        }
        var mid = low + Math.floor((high - low) / 2);
        this.mergeSort(nums, low, mid);
        this.mergeSort(nums, mid + 1, high);
        this.merge(nums, low, high, mid); // 合并有序列表
    };
    ;
    /// 合并两个有序数组
    MergeSort.merge = function (nums, low, high, mid) {
        var temp = __spreadArray([], nums, true);
        for (var i = low; i < high; i++) {
            temp[i] = nums[i];
        }
        var left = low; // left array
        var right = mid + 1; // right array
        for (var p = low; p <= high; p++) {
            // 左侧sort完毕
            if (left == mid + 1) { // 边界条件注意 必须要超过边界
                nums[p] == temp[right++];
                // 右侧sort完毕
            }
            else if (right == high + 1) { // 边界条件注意 必须要超过边界
                nums[p] = temp[left++];
            }
            // 左侧更小 添加左侧
            else if (temp[left] > temp[right]) {
                nums[p] = temp[right++];
            }
            else {
                nums[p] = temp[left++];
            }
        }
    };
    MergeSort.temp = [];
    return MergeSort;
}());
var QuickSort = /** @class */ (function () {
    function QuickSort() {
    }
    QuickSort.sort = function (nums) {
        this.quickSort(nums, 0, nums.length - 1);
        return nums;
    };
    QuickSort.quickSort = function (nums, low, high) {
        if (low >= high) { // 一个和merge 不一致的地方
            return;
        }
        var p = this.pivotSort(nums, low, high);
        this.quickSort(nums, low, p - 1);
        this.quickSort(nums, p + 1, high);
    };
    ;
    QuickSort.pivotSort = function (nums, low, high) {
        var left = low + 1;
        var right = high;
        var pivot = nums[low];
        while (left <= right) {
            while (left < high && nums[left] <= pivot) {
                left++;
            }
            while (right > low && nums[right] > pivot) {
                right--;
            }
            if (left >= right) {
                break;
            }
            this.swap(nums, left, right);
        }
        this.swap(nums, low, right); // swap pivot to right position
        return right;
    };
    QuickSort.swap = function (nums, i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
    return QuickSort;
}());
function sortArray(nums) {
    QuickSort.sort(nums);
    return nums;
}
;
// @lc code=end
sortArray([5, 2, 3, 1]);
//# sourceMappingURL=912.sort-an-array.js.map