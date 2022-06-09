/*
 * @lc app=leetcode id=797 lang=typescript
 *
 * [797] All Paths From Source to Target
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
function allPathsSourceTarget(graph) {
    var path = [];
    var res = [];
    var travel = function (v) {
        path.push(v);
        if (v == graph.length - 1) {
            res.push(__spreadArray([], path, true));
        }
        for (var _i = 0, _a = graph[v]; _i < _a.length; _i++) {
            var i = _a[_i];
            travel(i);
        }
        path.pop();
    };
    travel(0);
    return res;
}
;
// @lc code=end
//# sourceMappingURL=797.all-paths-from-source-to-target.js.map