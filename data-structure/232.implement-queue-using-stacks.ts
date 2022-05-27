/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {

  stack1: number[] = [];
  stack2: number[] = [];

  constructor() {

  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    this.moveToStack2();
    const res = this.stack2.pop();
    this.moveBack();
    return res;

  }
  moveToStack2(): void{
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  moveBack(): void{
    while(this.stack2.length != 0){
      this.stack1.push(this.stack2.pop());
    }
  }

  peek(): number {
    this.moveToStack2();
    let res = this.stack2.length > 0?  this.stack2[this.stack2.length - 1] : null;
    this.moveBack();
    return res;

  }

  empty(): boolean {
    return this.stack1.length == 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

