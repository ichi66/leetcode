/*
 * @lc app=leetcode id=819 lang=typescript
 *
 * [801] Minimum Swaps To Make Sequences Increasing
 */
// @lc code=start
function isBipartite(graph) {
    var isOk = true;
    var visited = new Array(graph.length).fill(false);
    var color = new Array(graph.length).fill(false);
    var queue = [];
    var bfsTraversal = function (v) {
        queue.push(v);
        while (queue.length > 0) {
            var cur = queue.shift();
            visited[cur] = true;
            for (var _i = 0, _a = graph[cur]; _i < _a.length; _i++) {
                var el = _a[_i];
                if (visited[el]) {
                    if (color[el] === color[cur]) {
                        isOk = false;
                        break;
                    }
                }
                else {
                    color[el] = !color[cur];
                    queue.push(el);
                }
            }
        }
    };
    for (var i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            bfsTraversal(i);
        }
    }
    return isOk;
}
;
// function isBipartite(graph: number[][]): boolean {
//   let isOk: boolean = true;
//   const visited : boolean[] = new Array(graph.length).fill(false); 
//   const color: boolean[] = new Array(graph.length).fill(false);
//   const dfsTraversal = (v: number) => {
//       if(!isOk){
//           return;
//       }
//       if(visited[v]){
//           return;
//       }
//       visited[v] = true;
//       let curColor = color[v];
//       for(let el of graph[v]){
//           if(visited[el]){
//               if(curColor == color[el]){
//                   isOk = false;
//                   return;
//                  }
//           }else{
//               color[el] = !curColor;
//               dfsTraversal(el);
//           }
//       }
//   }
//   for(let i = 0; i< graph.length; i++){
//       dfsTraversal(i);
//   }
//   return isOk;
// };
// @lc code=end
//# sourceMappingURL=801.is-graph-bipartite.js.map