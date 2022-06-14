

/// 边界条件： 所有都做成左右闭区间
function mergeSort(nums: number[], lo: number, hi: number) {
  if (lo == hi) {
    return;
  }
  const mid = lo + Math.floor((hi - lo) / 2);
  mergeSort(nums, lo, mid);
  mergeSort(nums, mid + 1, hi);

  merge(nums, lo, mid, hi);
}


function merge(nums: number[], lo: number, mid: number, hi: number): void {
  const temp = new Array(nums.length);
  for (let i = lo; i <= hi; i++) {
    temp[i] = nums[i];
  }
  let left = lo;
  let right = mid + 1;
  for (let i = lo; i <= hi; i++) {
    if (right == hi + 1) { // 因为是闭区间，所以要超出一个位置， 确保hi已经被对比过
      nums[i] = temp[left];
      left++;
    } else if (left == mid + 1) { // 因为是闭区间，所以要超出一个位置， 确保mid已经被对比过
      nums[i] = temp[right];
      right++;
    } else if (nums[left] <= nums[right]) {
      nums[i] = temp[left]
      left++
    }
    else {
      nums[i] = temp[right];
      right++
    }
  }
}

const a = [11, 12, 0, 7, 9, 3, 2, 5, 54, 4];
mergeSort(a, 0, a.length - 1);
console.log(a)