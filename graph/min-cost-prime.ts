/*
 * @lc app=leetcode id=1706 lang=typescript
 *
 * [1584] Min Cost to Connect All Points
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



function minCostConnectPoints(points: number[][]): number {

  /// build graph : [[[target, null], [target, val], [target, val], [target, val]],[],[],[],[]]
  const graph : number[][][] = new Array(points.length);
  for(let i = 0; i < points.length; i++){
    graph[i] = new Array(points.length);
    for(let j = 0; j < points.length; j++){
      if(j==i){
        continue;
      }
      graph[i][j] = [ j, Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])];
    }
  }
  console.log(graph);
  /// isMst: [], check if already in isMST
  const inMST = new Array(points.length).fill(false);
  let weightSum = 0;

  const pq = new Heap((a,b) => a[1] - b[1]);
  const cut = (index: number) =>{
    inMST[index] = true;
    let edges = graph[index]
    for(let i = 0; i < edges.length; i++){
      if(edges[i] === undefined){
        continue;
      }
      // if already in the mst, then continue
      if(inMST[i]){
        continue;
      }
      pq.add(edges[i]);
    }
  }
  cut(0);
    /// build a min spanning tree
  while(!pq.isEmpty()){
    const curEdge: number[] = pq.remove();
    const to = curEdge[0];
    const weight = curEdge[1];
    // if already in mst, then continue
    if(inMST[to]){
      continue
    }
    weightSum = weightSum + weight;
    cut(to);

  }
  /// return the total cost 
  return weightSum;
};
// @lc code=end

