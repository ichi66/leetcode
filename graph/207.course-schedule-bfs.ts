/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {    
  const graph =   buildGraph(numCourses, prerequisites);
  // console.log(graph);
  let inDegree = new Array(numCourses).fill(0);
  let queue = [];
  let count = 0;
  for(let item of graph){
    for(let i of item){
      inDegree[i]++;
    }
  }

  for(let i = 0; i< inDegree.length; i++){
    if(inDegree[i] == 0){
      queue.push(i); /// start note
    }
  }

  while(queue.length > 0){
    count++;
    let curr = queue.shift();
    for(let next of graph[curr]){
      inDegree[next]--;
      if(inDegree[next] == 0){
        queue.push(next);
      }
    }
  }

  return count == numCourses;
  
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

