/*
 * @lc app=leetcode id=990 lang=typescript
 *
 * [990] Satisfiability of Equality Equations
 */

// @lc code=start

class DisjointSet{
  collection: string[] = [];
  parent: number[] = [];
  constructor(){

  }

  // find parent
  find(el: string){
    let index = this.collection.indexOf(el);
    if(this.parent[index] != index){
      let pIndex: number = this.parent[index];
      this.parent[index] = this.find(this.collection[pIndex]);
    }
    return this.parent[index]; // crucial!!!!!! 不能 return this.index;
  }

  union(a:string,b: string): void{
    this.parent[this.find(a)] = this.find(b);
  }
  add(a: string): void{
    if(this.collection.indexOf(a) >-1 ){
      return;
    }
    this.collection.push(a);
    this.parent.push(this.collection.length - 1);// parent is itself
  }

  isConnected(a:string, b: string): boolean{
    return this.find(a) === this.find(b);
  }
}



function equationsPossible(equations: string[]): boolean {
  const uf = new DisjointSet();
  let isPossible = true;

  for(let el of equations){
    let charA = el[0];
    let charB = el[3];
    let operator = el.substring(1,3);
    uf.add(charA);
    uf.add(charB);
    if(operator === '=='){
      uf.union(charA,charB);
    }
  }

  for(let el of equations){
    let charA = el[0];
    let charB = el[3];
    let operator = el.substring(1,3);
    uf.add(charA);
    uf.add(charB);
    if(operator === '!=' && uf.isConnected(charA,charB)){
      isPossible = false;
      break;
    }
  }
  return isPossible;
};
// @lc code=end

