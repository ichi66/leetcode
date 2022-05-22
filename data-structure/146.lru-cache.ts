/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

class BiNode {
  val: number;
  key: number;
  pre: BiNode;
  next: BiNode;
  constructor(key?: number | null, val?: number | null) {
    this.val = (val === undefined) ? null : val;
    this.key = (key === undefined) ? null : key;
    this.pre = null;
    this.next = null;
  }
}


class BiLinkedList {
  head: BiNode = new BiNode();
  tile: BiNode = new BiNode();
  constructor() {
    this.head.next = this.tile;
    this.tile.pre = this.head;
  }

  /// add to the end
  addRecentUsed(node: BiNode): void {
    let lastRecent = this.tile.pre;
    this.tile.pre = node;
    node.next = this.tile;
    node.pre = lastRecent;
    lastRecent.next = node;
  }

  printFirst() {
    console.log('first', this.head.next.key, this.head.next.val);
    console.log('last', this.tile.pre.key, this.tile.pre.val);
  }


  remove(node: BiNode): BiNode {
    let pre = node.pre;
    let next = node.next;
    pre.next = next;
    next.pre = pre;
    return node
  }
  // remove from start 
  removeFirst(): BiNode {
    let first = this.head.next;
    this.remove(first);
    return first;
  }

  makeNodeRecentUsed(node: BiNode){
    this.remove(node);
    this.addRecentUsed(node);
  }


}



class LRUCache {
  capacity: number = 0;
  cache: BiLinkedList;
  map: Map<number, BiNode>;
  size: number = 0;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = new BiLinkedList();
    this.map = new Map<number, BiNode>();
  }

  get(key: number): number {
    const node: BiNode | null = this.map.get(key);
    /// not exist , return -1
    if (node == null) {
      return -1;
    }
    /// switch the current node as the recent used node
    this.cache.remove(node);
    this.cache.addRecentUsed(node);
    return node.val;

  }
  /// 1. put to map
  /// 2. put to cache
  /// 3. size ++
  /// 4. if size > capacity, remove LRU
  put(key: number, value: number): void {

    // scenario 1: key exist. Modify the val and make it recent;
    if(this.map.has(key)){
      const node = this.map.get(key);
      node.val = value;
      this.cache.makeNodeRecentUsed(node);
      return;
    }
    /// scenario 2: key does not exist
    const node = new BiNode(key, value);
    this.cache.addRecentUsed(node);
    this.map.set(key, node);
    this.size++;
    if (this.size > this.capacity) {
      this.size--;
      let first = this.cache.removeFirst();
      this.map.delete(first.key);
    }
    this.cache.printFirst();
  }

  // /// 1.remove from cache 
  // /// 2. remove from map
  // /// 3. size -- 
  // deleteLU(): void {
  //   this.size--;
  //   let first = this.cache.removeFirst();
  //   this.map.delete(first.key);
  // }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

