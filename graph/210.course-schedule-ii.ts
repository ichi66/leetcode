/*
 * @lc app=leetcode id=210 lang=typescript
 *
 * [210] Course Schedule II
 */

// @lc code=start
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = buildGraph(numCourses, prerequisites);
  const visited = [];
  const path = [];
  const postOrder = [];
  let hasCycle: boolean = false;
  for (let i = 0; i < numCourses; i++) {
    visited.push(false);
    path.push(false);
  }

  const bfsTraversal = (v: number): void => {
    if (path[v]) {
      hasCycle = true;
      return;
    }
    if (visited[v]) {
      return;
    }
    visited[v] = true;
    path[v] = true;
    for (let item of graph[v]) {
      bfsTraversal(item);
    }
    path[v] = false;
    postOrder.push(v); // post order of the course

  }

  for (let i = 0; i < numCourses; i++) {
    bfsTraversal(i);
  }
  if (hasCycle) {
    return [];
  }

  return postOrder.reverse();
};


function buildGraph(numCourses: number, prerequisites: number[][]): number[][] {

  const graph = [];
  for (let i = 0; i < numCourses; i++) {
    graph.push([]);
  }
  for (let item of prerequisites) {
    let from = item[1];
    let to = item[0];
    graph[from].push(to);
  }

  return graph;
}
// @lc code=end

