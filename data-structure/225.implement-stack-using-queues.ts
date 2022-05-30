/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
class MyStack {
    queue1 : number[] = [];
    queue2 :  number [] = [];
    constructor() {

    }

    push(x: number): void {
      this.queue1.unshift(x);
    }

    pop(): number {
      this.moveToQ2();
      const res = this.queue2.pop();
      this.moveToQ1();
      return res;
    }

    moveToQ2(){
      while(this.queue1.length > 0){
        this.queue2.unshift(this.queue1.pop());
      }
    }

    moveToQ1(){
      while(this.queue2.length > 0){
        this.queue1.unshift(this.queue2.pop());
      }
    }

    top(): number {
      this.moveToQ2();
      const res = this.queue2.length > 0 ?   this.queue2[this.queue2.length-1] : null;
      this.moveToQ1();
      return res;
    }

    empty(): boolean {
      return this.queue1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

