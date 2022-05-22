/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {    
  const graph =   buildGraph(numCourses, prerequisites);
  const visited = new Map();
  const path = new Map<number, boolean>();
  // console.log(graph);
  let hasCycle = false;
  const travel = (v: number): void =>{
      /// 判断是否有环的主要逻辑
      if(path.has(v) && path.get(v)){
        hasCycle =true; 
        return;
      }
      /// 对于已经访问过的，不需要再次进行访问，节省时间
      if(visited.has(v)){
        return;
      }
      visited.set(v, 1);
      path.set(v, true);
      for(let i of graph[v]){
          travel(i);
      }
      path.set(v, false);
  }
  for(let i = 0; i < numCourses; i++){
    travel(i);
  }
  return !hasCycle;
};


function buildGraph( numCourses: number, prerequisites: number[][]): number[][]{
  const graph = [];
  for(let i = 0 ; i < numCourses; i++){
      graph.push([]);
  }
  for(let i = 0; i< prerequisites.length; i++){
      let from = prerequisites[i][1];
      let to = prerequisites[i][0];
      graph[from].push(to);
  }
  return graph;
}
// @lc code=end

