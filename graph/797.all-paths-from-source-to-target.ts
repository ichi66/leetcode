/*
 * @lc app=leetcode id=797 lang=typescript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
function allPathsSourceTarget(graph: number[][]): number[][] {
  let path : number[]= [];
  const res: number[][]= [];

  const travel = ( v: number): void => {
    path.push(v);
    if(v == graph.length -1){
      res.push([...path]);
    }
    for(let i of graph[v]){
      travel(i);
    }
    path.pop();
  }

  travel(0);
  return res;
};

// @lc code=end

