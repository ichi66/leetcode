/*
 * @lc app=leetcode id=1514 lang=typescript
 *
 * [1514] Path with maximum probability
 */

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
  index: number;
  prob: number
  constructor(index: number, prob: number){
    this.index = index;
    this.prob = prob;
  }
}


 function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
  const graph: number[][][] =   new Array(n);
  for(let i = 0; i< graph.length; i++){
    graph[i] = new Array();
  }
  for(let i = 0; i< edges.length; i++){
    const startIndex = edges[i][0];
    const endIndex = edges[i][1];
    const prob = succProb[i];
    graph[startIndex].push([endIndex,prob]);
    graph[endIndex].push([startIndex,prob]);
  }
  const distList = dijkstra(graph, start);
  return distList[end];



};



function dijkstra(graph:number[][][], startIndex: number): number[]{
  if(startIndex >= graph.length){
    return [];
  }
  const res = new Array<number>(graph.length).fill(0);
  let pq =  new Heap((a,b) => b.prob - a.prob); // max-heap
  pq.add(new State(startIndex,1)); // the prob of the first node is 1
  while(!pq.isEmpty()){
    const curNode : State = pq.remove();
    const curProb : number = curNode.prob;
    const curIndex: number = curNode.index;
    for( const el of graph[curIndex]){
      const nextIndex = el[0];
      const probToNext = el[1];
      if(curProb * probToNext > res[nextIndex]){
        res[nextIndex] = curProb * probToNext;
        pq.add(new State(nextIndex, curProb * probToNext));
      }
    }
  }

  return res;
}


// [
//   [[1,0.5], [2,0.2]],
//   [[0,0.5], [2, 0.5]],
//   [[x,x],[x,x]]
// ]

// @lc code=end

