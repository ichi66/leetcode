/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
class TrieNode{
  val: boolean | null = null;
  children: TrieNode[] = new Array(26);
  constructor(val?: boolean){
    this.val = val !== undefined ? val :  null;
  }
}



class Trie {
    root: TrieNode = new TrieNode(false);
    constructor() {

    }

    charIndex(s: string, i: number){
      return s.charCodeAt(i) - 97;
    }


    insert(word: string): void {
      let curNode = this.root;
      for(let i = 0; i< word.length;  i++){
        let charCode = this.charIndex(word, i);
        if(!curNode.children[charCode]){
          curNode.children[charCode] = new TrieNode();
        }

        if(i == word.length - 1){
          curNode.children[charCode].val = true;
          
        }
        curNode = curNode.children[charCode];
      }
    }

    search(word: string): boolean {
      let curNode = this.root;
      for(let i = 0; i< word.length; i++){
        let charIndex = this.charIndex(word,i);
        if(i == word.length - 1 && curNode.children[charIndex] && curNode.children[charIndex].val ){
          return true;
        }
        if(!curNode.children[charIndex]){
          return false;
        }
        curNode = curNode.children[charIndex];
      }
      return false;
    }

    startsWith(prefix: string): boolean {
      let curNode = this.root;
      for(let i = 0; i< prefix.length; i++){
        let charIndex = this.charIndex(prefix,i);
        if(i == prefix.length - 1 && curNode.children[charIndex]){
          return true;
        }
        if(!curNode.children[charIndex]){
          return false;
        }
        curNode = curNode.children[charIndex];
      }
      return false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

