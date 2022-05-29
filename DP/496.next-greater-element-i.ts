/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
class Stack<V>{
  innerList: V[] = new Array<V>();
  // Stack(){
  //   this.innerList = new Array<V>();
  // }
  push(v: V): void{
    this.innerList.push(v);
  }
  pop(): void {
    this.innerList.pop();
  }

  peek(): V | null{
    if(this.innerList.length > 0){
      return this.innerList[this.innerList.length-1];
    }
    return null;
  }

  size(): number{
    return this.innerList.length;
  }

  isEmpty(): boolean{
    return this.innerList.length == 0;
  }

}



function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const monoStack = new Stack<number>();
  const greaterMap = new Map<number, number>();
  for(let n = nums2.length -1; n>=0; n--){
    while(!monoStack.isEmpty() && monoStack.peek() <= nums2[n]){
      monoStack.pop();
    }
    greaterMap.set(nums2[n], monoStack.peek() ?? -1);
    monoStack.push(nums2[n]);
  }
  console.log('monoStack: ', monoStack);
  console.log('greaterMap: ', greaterMap);

  let res: number[] = [];
  for(let n=0; n< nums1.length; n++){
    res.push(greaterMap.get(nums1[n]));
  }
  return res;
};




// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   let greater : number[] =  [];
//   let Monostack: number[] = [];

//   for(let n = nums2.length -1; n>=0 ; n--){
//     while(Monostack.length > 0 && Monostack[Monostack.length-1] <= nums2[n]){
//       Monostack.pop();
//     }
//     greater.unshift(Monostack.length > 0 ?Monostack[Monostack.length-1] : -1);
//     Monostack.push(nums2[n]);
//   }

//   let res = [];
//   for(let i = 0; i < nums1.length; i++){
//     const index = nums2.indexOf(nums1[i]);
//     res.push(greater[index]); 
//   }
//   return res;
// };
// @lc code=end

