/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */
// @lc code=start
function canFinish(numCourses, prerequisites) {
    var graph = buildGraph(numCourses, prerequisites);
    // console.log(graph);
    var inDegree = new Array(numCourses).fill(0);
    var queue = [];
    var count = 0;
    for (var _i = 0, graph_1 = graph; _i < graph_1.length; _i++) {
        var item = graph_1[_i];
        for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
            var i = item_1[_a];
            inDegree[i]++;
        }
    }
    for (var i = 0; i < inDegree.length; i++) {
        if (inDegree[i] == 0) {
            queue.push(i); /// start note
        }
    }
    while (queue.length > 0) {
        count++;
        var curr = queue.shift();
        for (var _b = 0, _c = graph[curr]; _b < _c.length; _b++) {
            var next = _c[_b];
            inDegree[next]--;
            if (inDegree[next] == 0) {
                queue.push(next);
            }
        }
    }
    return count == numCourses;
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
//# sourceMappingURL=207.course-schedule-bfs.js.map