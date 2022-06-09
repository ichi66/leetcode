/*
 * @lc app=leetcode id=1631 lang=typescript
 *
 * [1631] Maximum Score From Removing Stones
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
  i: number;
  j: number;
  val: number;
  constructor(i, j, val){
    this.i = i;
    this.j = j;
    this.val = val;

  }
}

function minimumEffortPath(heights: number[][]): number {
  let rowLength = heights.length;
  let colLength = heights[0].length;
  const maxDiff = new Array(rowLength);
  for(let i = 0; i< rowLength; i++){
    maxDiff[i] =  new Array(colLength).fill(Infinity);
  }
  maxDiff[0][0] = 0;
  const pq = new Heap((a,b) => a.val - b.val);
  pq.add(new State(0,0,0));
  const directions: number[][] = [[1,0], [-1,0], [0,1], [0,-1]]


  while(!pq.isEmpty()){
    const curNode: State =  pq.remove();
    const i: number = curNode.i;
    const j : number = curNode.j;
    const curHeight : number = heights[i][j];
    const curMaxDiff : number = maxDiff[i][j];
    for(const direction of directions){
      const nextI : number = i + direction[0];
      const nextJ : number = j + direction[1];
      if(nextI < 0 ||  nextI>= rowLength || nextJ < 0 || nextJ >= colLength){
        continue;
      }
      const heightDiff =Math.max(Math.abs(curHeight - heights[nextI][nextJ]), curMaxDiff) ;
      if(heightDiff < maxDiff[nextI][nextJ]){
        maxDiff[nextI][nextJ] = heightDiff;
        pq.add( new State(nextI,nextJ,heightDiff));
      } 
    }
  }

  return maxDiff[rowLength-1][colLength-1];
};




// @lc code=end

