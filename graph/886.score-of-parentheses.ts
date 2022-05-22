/*
 * @lc app=leetcode id=922 lang=typescript
 *
 * [886] Possible Bipartition
 */

// @lc code=start
function possibleBipartition(n: number, dislikes: number[][]): boolean {

  const buildGraph = (n: number, dislikes: number[][]): number[][] => {
    const g = new Array(n + 1);
    for(let i =0; i<=n; i++){
      g[i] = [];    
    }

    for (let el of dislikes) {
      let v = el[0];
      let w = el[1];
      g[v].push(w);
      g[w].push(v);
    }
    return g;
  }
  let isOk: boolean = true;
  const graph = buildGraph(n, dislikes);
  console.log(graph);
  const visited: boolean[] = new Array(graph.length +1 ).fill(false);
  const color: boolean[] = new Array(graph.length + 1).fill(false);
  const dfsTraversal = (v: number) => {
    if (!isOk) {
      return;
    }
    if (visited[v]) {
      return;
    }
    visited[v] = true;
    let curColor = color[v];
    for (let el of graph[v]) {
      if (visited[el]) {
        if (curColor == color[el]) {
          isOk = false;
          return;
        }
      } else {
        color[el] = !curColor;
        dfsTraversal(el);
      }
    }
  }
  for (let i = 1; i < graph.length ; i++) {
    dfsTraversal(i);
  }
  return isOk;
};
// @lc code=end

