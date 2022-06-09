/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */
// @lc code=start
var BiNode = /** @class */ (function () {
    function BiNode(key, val) {
        this.val = (val === undefined) ? null : val;
        this.key = (key === undefined) ? null : key;
        this.pre = null;
        this.next = null;
    }
    return BiNode;
}());
var BiLinkedList = /** @class */ (function () {
    function BiLinkedList() {
        this.head = new BiNode();
        this.tile = new BiNode();
        this.head.next = this.tile;
        this.tile.pre = this.head;
    }
    /// add to the end
    BiLinkedList.prototype.addRecentUsed = function (node) {
        var lastRecent = this.tile.pre;
        this.tile.pre = node;
        node.next = this.tile;
        node.pre = lastRecent;
        lastRecent.next = node;
    };
    BiLinkedList.prototype.printFirst = function () {
        console.log('first', this.head.next.key, this.head.next.val);
        console.log('last', this.tile.pre.key, this.tile.pre.val);
    };
    BiLinkedList.prototype.remove = function (node) {
        var pre = node.pre;
        var next = node.next;
        pre.next = next;
        next.pre = pre;
        return node;
    };
    // remove from start 
    BiLinkedList.prototype.removeFirst = function () {
        var first = this.head.next;
        this.remove(first);
        return first;
    };
    BiLinkedList.prototype.makeNodeRecentUsed = function (node) {
        this.remove(node);
        this.addRecentUsed(node);
    };
    return BiLinkedList;
}());
var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.capacity = 0;
        this.size = 0;
        this.capacity = capacity;
        this.size = 0;
        this.cache = new BiLinkedList();
        this.map = new Map();
    }
    LRUCache.prototype.get = function (key) {
        var node = this.map.get(key);
        /// not exist , return -1
        if (node == null) {
            return -1;
        }
        /// switch the current node as the recent used node
        this.cache.remove(node);
        this.cache.addRecentUsed(node);
        return node.val;
    };
    /// 1. put to map
    /// 2. put to cache
    /// 3. size ++
    /// 4. if size > capacity, remove LRU
    LRUCache.prototype.put = function (key, value) {
        // scenario 1: key exist. Modify the val and make it recent;
        if (this.map.has(key)) {
            var node_1 = this.map.get(key);
            node_1.val = value;
            this.cache.makeNodeRecentUsed(node_1);
            return;
        }
        /// scenario 2: key does not exist
        var node = new BiNode(key, value);
        this.cache.addRecentUsed(node);
        this.map.set(key, node);
        this.size++;
        if (this.size > this.capacity) {
            this.size--;
            var first = this.cache.removeFirst();
            this.map.delete(first.key);
        }
        this.cache.printFirst();
    };
    return LRUCache;
}());
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
//# sourceMappingURL=146.lru-cache.js.map