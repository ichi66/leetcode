/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] coco eating bananas
 */
// @lc code=start
function minEatingSpeed(piles, h) {
    var right = Math.max.apply(Math, piles);
    var left = 1; // min speed
    var hourUsed = function (speed) { return piles.reduce(function (sum, pile) { return Math.ceil(pile / speed) + sum; }, 0); };
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (hourUsed(mid) == h) {
            right = mid - 1;
        }
        else if (hourUsed(mid) > h) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}
;
//# sourceMappingURL=907.koko-eating-bananas.js.map