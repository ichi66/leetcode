/*
 * @lc app=leetcode id=912 lang=typescript
 *
 * [912] Sort an Array
 */

// @lc code=start
class MergeSort {
  static temp = [];
  static sort(nums: number[]) {
    this.temp = [...nums];
    this.mergeSort(nums, 0, nums.length - 1);
    return nums;
  }

  static mergeSort(nums: number[], low: number, high: number): void {
    if (low == high) {
      return;
    }

    let mid = low + Math.floor((high - low) / 2);
    this.mergeSort(nums, low, mid);
    this.mergeSort(nums, mid + 1, high);

    this.merge(nums, low, high, mid); // 合并有序列表
  };



  /// 合并两个有序数组
  static merge(nums: number[], low: number, high: number, mid: number) {

    let temp = [...nums];
    for (let i = low; i < high; i++) {
      temp[i] = nums[i];
    }
    let left = low; // left array
    let right = mid + 1; // right array

    for (let p = low; p <= high; p++) {
      // 左侧sort完毕
      if (left == mid + 1) { // 边界条件注意 必须要超过边界
        nums[p] == temp[right++];
        // 右侧sort完毕
      } else if (right == high + 1) {// 边界条件注意 必须要超过边界
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
  }

}



class QuickSort {

  static sort(nums: number[]) {
    this.quickSort(nums, 0, nums.length - 1);
    return nums;
  }


  static quickSort(nums: number[], low: number, high: number): void {
    if (low >= high) { // 一个和merge 不一致的地方
      return;
    }

    let p = this.pivotSort(nums, low, high);
    
    this.quickSort(nums, low, p-1) ;
    this.quickSort(nums, p + 1, high);
  };



  static pivotSort(nums: number[], low: number, high: number) : number{
    let left = low +1;
    let right = high;
    let pivot = nums[low];
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
  }
  static swap(nums: number[], i: number, j: number): void {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

  }

}

function sortArray(nums: number[]): number[] {
  QuickSort.sort(nums);
  return nums;
};
// @lc code=end


sortArray([5, 2, 3, 1]);



