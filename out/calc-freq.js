function calcFreq(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            continue;
        }
        var nextIndex = nums[i] - 1;
        // next index has already been modified
        nums[i] = 0;
        nextIndexRecusion(nums, nextIndex);
    }
    return nums.map(function (el) { return el * -1; });
}
function nextIndexRecusion(nums, index) {
    if (nums[index] <= 0) {
        nums[index] -= 1;
    }
    else {
        var nextIndex = nums[index] - 1;
        nums[index] = -1;
        nextIndexRecusion(nums, nextIndex);
    }
}
console.log(calcFreq([5, 5, 1, 1, 2]));
//# sourceMappingURL=calc-freq.js.map