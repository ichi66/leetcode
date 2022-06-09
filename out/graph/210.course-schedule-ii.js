/*
 * @lc app=leetcode id=210 lang=typescript
 *
 * [210] Course Schedule II
 */
// @lc code=start
function findOrder(numCourses, prerequisites) {
    var graph = buildGraph(numCourses, prerequisites);
    var visited = [];
    var path = [];
    var postOrder = [];
    var hasCycle = false;
    for (var i = 0; i < numCourses; i++) {
        visited.push(false);
        path.push(false);
    }
    var bfsTraversal = function (v) {
        if (path[v]) {
            hasCycle = true;
            return;
        }
        if (visited[v]) {
            return;
        }
        visited[v] = true;
        path[v] = true;
        for (var _i = 0, _a = graph[v]; _i < _a.length; _i++) {
            var item = _a[_i];
            bfsTraversal(item);
        }
        path[v] = false;
        postOrder.push(v); // post order of the course
    };
    for (var i = 0; i < numCourses; i++) {
        bfsTraversal(i);
    }
    if (hasCycle) {
        return [];
    }
    return postOrder.reverse();
}
;
function buildGraph(numCourses, prerequisites) {
    var graph = [];
    for (var i = 0; i < numCourses; i++) {
        graph.push([]);
    }
    for (var _i = 0, prerequisites_1 = prerequisites; _i < prerequisites_1.length; _i++) {
        var item = prerequisites_1[_i];
        var from = item[1];
        var to = item[0];
        graph[from].push(to);
    }
    return graph;
}
// @lc code=end
//# sourceMappingURL=210.course-schedule-ii.js.map