/*
 * @lc app=leetcode id=743 lang=typescript
 *
 * [743] Find Smallest Letter Greater Than Target
 */
// @ts-nocheck
// @lc code=start
class Heap {
  array: any[];
  comparator: (i1:any, i2: any) => number;
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.comparator = (i1, i2) => {
      const value = comparator(this.array[i1], this.array[i2]);
      if (Number.isNaN(value)) { throw new Error(`Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`); }
      return value;
    };
  }

  /**
   * Insert element
   * @runtime O(log n)
   * @param {any} value
   */
  add(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  /**
   * Retrieves, but does not remove, the head of this heap
   * @runtime O(1)
   */
  peek() {
    return this.array[0];
  }

  /**
   * Retrieves and removes the head of this heap, or returns null if this heap is empty.
   * @runtime O(log n)
   */
  remove(index = 0) {
    if (!this.size) return null;
    this.swap(index, this.size - 1); // swap with last
    const value = this.array.pop(); // remove element
    this.bubbleDown(index);
    return value;
  }

  /**
   * Returns the number of elements in this collection.
   * @runtime O(1)
   */
  get size() {
    return this.array.length;
  }

  /**
   * Move new element upwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleUp() {
    let index = this.size - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  /**
   * After removal, moves element downwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleDown(index = 0) {
    let curr = index;
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const getTopChild = (i) => (right(i) < this.size
      && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i));

    while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
      const next = getTopChild(curr);
      this.swap(curr, next);
      curr = next;
    }
  }

  /**
   * Swap elements on the heap
   * @runtime O(1)
   * @param {number} i1 index 1
   * @param {number} i2 index 2
   */
  swap(i1: number, i2: number) {
    [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
  }
  isEmpty(){
    return this.array.length == 0;
  }
}

class State{
  distFromStart: number;
  index: number;
  constructor(index: number, distFromStart: number){
    this.index = index;
    this.distFromStart = distFromStart;
  }

}


function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph: number[][][] = new Array(n+1); // start from 1, so 
  for(let i = 0; i< graph.length;i++){
    graph[i] = new Array();
  }
  // build graph
  // [[[target, weight],[target, weight]]
  // [[],[]]
  // [[],[]]]

  for(let el of times){
    const startNode = el[0];
    const targetNode = el[1];
    const weight = el[2];
    graph[startNode].push([targetNode, weight]);
  }
  // console.log('graph: ', graph);
  // b
  const distanceList = dijkstra(graph, k);
  let res:number = Math.max(...distanceList.slice(1));
  // console.log('res: ', res);
  // console.log('distanceList: ', distanceList);
  return res == Infinity ? -1 : res;
};



function dijkstra(graph: number[][][], start: number): number[]{
  const res = new Array(graph.length).fill(Infinity);
  const pq = new Heap((a,b) => a.distFromStart - b.distFromStart );
  if(graph[start].length === 0){
    return res;
  }
  res[start] = 0;
  pq.add(new State(start, 0));
  // console.log(pq.isEmpty());
  while(!pq.isEmpty()){
    const curNode: State = pq.remove();
    // console.log('curNode: ', curNode);
    const curIndex = curNode.index;
    const cueDist = curNode.distFromStart;
    for(let el of graph[curIndex]){
      // console.log('el: ', el);
      const [targetIndex, weight] = el;
      const distToTarget = cueDist + weight;
      if(distToTarget < res[targetIndex]){
        res[targetIndex] = distToTarget;
        pq.add(new State(targetIndex,distToTarget)); 
      }
    }
  }

  return res;
}


// @lc code=end

