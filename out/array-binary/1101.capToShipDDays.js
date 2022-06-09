/*
 * @lc app=leetcode id=1101 lang=typescript
 *
 * [1101] cap to ship within d days
 */
// @lc code=start
function shipWithinDays(weights, days) {
    var right = weights.reduce(function (a, b) { return a + b; }, 0);
    var left = Math.max.apply(Math, weights);
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (daysUsed(weights, mid) == days) {
            right = mid - 1;
        }
        else if (daysUsed(weights, mid) < days) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
;
function daysUsed(weights, cap) {
    var res = 0;
    var acc = 0;
    for (var i = 0; i < weights.length; i++) {
        acc = acc + weights[i];
        if (i == weights.length - 1) {
            res = acc > cap ? res = res + 2 : res = res + 1;
            break;
        }
        if (acc > cap) {
            res = res + 1;
            acc = weights[i];
        }
    }
    return res;
}
// @lc code=end
//# sourceMappingURL=1101.capToShipDDays.js.map