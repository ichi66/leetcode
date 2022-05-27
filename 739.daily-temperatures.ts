/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
class Stack<V>{
  innerList: V[] = new Array<V>();
  // Stack(){
  //   this.innerList = new Array<V>();
  // }
  push(v: V): void {
    this.innerList.push(v);
  }
  pop(): void {
    this.innerList.pop();
  }

  peek(): V | null {
    if (this.innerList.length > 0) {
      return this.innerList[this.innerList.length - 1];
    }
    return null;
  }

  size(): number {
    return this.innerList.length;
  }

  isEmpty(): boolean {
    return this.innerList.length == 0;
  }

}

function dailyTemperatures(temperatures: number[]): number[] {
  let monoStack = new Stack<number>();
  let res = [];
  for (let n = temperatures.length - 1; n >= 0; n--) {
    while (!monoStack.isEmpty() && temperatures[monoStack.peek()] <= temperatures[n]) {
      monoStack.pop();
    }
    res.unshift(monoStack.peek() - n > 0 ? monoStack.peek() - n : 0);
    monoStack.push(n);
  }

  return res;
};
// @lc code=end

