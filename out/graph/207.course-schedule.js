/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */
// @lc code=start
function canFinish(numCourses, prerequisites) {
    var graph = buildGraph(numCourses, prerequisites);
    var visited = new Map();
    var path = new Map();
    // console.log(graph);
    var hasCycle = false;
    var travel = function (v) {
        /// 判断是否有环的主要逻辑
        if (path.has(v) && path.get(v)) {
            hasCycle = true;
            return;
        }
        /// 对于已经访问过的，不需要再次进行访问，节省时间
        if (visited.has(v)) {
            return;
        }
        visited.set(v, 1);
        path.set(v, true);
        for (var _i = 0, _a = graph[v]; _i < _a.length; _i++) {
            var i = _a[_i];
            travel(i);
        }
        path.set(v, false);
    };
    for (var i = 0; i < numCourses; i++) {
        travel(i);
    }
    return !hasCycle;
}
;
function buildGraph(numCourses, prerequisites) {
    var graph = [];
    for (var i = 0; i < numCourses; i++) {
        graph.push([]);
    }
    for (var i = 0; i < prerequisites.length; i++) {
        var from = prerequisites[i][1];
        var to = prerequisites[i][0];
        graph[from].push(to);
    }
    return graph;
}
// @lc code=end
//# sourceMappingURL=207.course-schedule.js.map