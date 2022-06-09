/*
 * @lc app=leetcode id=922 lang=typescript
 *
 * [886] Possible Bipartition
 */
// @lc code=start
function possibleBipartition(n, dislikes) {
    var buildGraph = function (n, dislikes) {
        var g = new Array(n + 1);
        for (var i = 0; i <= n; i++) {
            g[i] = [];
        }
        for (var _i = 0, dislikes_1 = dislikes; _i < dislikes_1.length; _i++) {
            var el = dislikes_1[_i];
            var v = el[0];
            var w = el[1];
            g[v].push(w);
            g[w].push(v);
        }
        return g;
    };
    var isOk = true;
    var graph = buildGraph(n, dislikes);
    console.log(graph);
    var visited = new Array(graph.length + 1).fill(false);
    var color = new Array(graph.length + 1).fill(false);
    var dfsTraversal = function (v) {
        if (!isOk) {
            return;
        }
        if (visited[v]) {
            return;
        }
        visited[v] = true;
        var curColor = color[v];
        for (var _i = 0, _a = graph[v]; _i < _a.length; _i++) {
            var el = _a[_i];
            if (visited[el]) {
                if (curColor == color[el]) {
                    isOk = false;
                    return;
                }
            }
            else {
                color[el] = !curColor;
                dfsTraversal(el);
            }
        }
    };
    for (var i = 1; i < graph.length; i++) {
        dfsTraversal(i);
    }
    return isOk;
}
;
// @lc code=end
//# sourceMappingURL=886.score-of-parentheses.js.map