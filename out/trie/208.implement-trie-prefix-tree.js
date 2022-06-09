/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
 */
// @lc code=start
var TrieNode = /** @class */ (function () {
    function TrieNode(val) {
        this.val = null;
        this.children = new Array(26);
        this.val = val !== undefined ? val : null;
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode(false);
    }
    Trie.prototype.charIndex = function (s, i) {
        return s.charCodeAt(i) - 97;
    };
    Trie.prototype.insert = function (word) {
        var curNode = this.root;
        for (var i = 0; i < word.length; i++) {
            var charCode = this.charIndex(word, i);
            if (!curNode.children[charCode]) {
                curNode.children[charCode] = new TrieNode();
            }
            if (i == word.length - 1) {
                curNode.children[charCode].val = true;
            }
            curNode = curNode.children[charCode];
        }
    };
    Trie.prototype.search = function (word) {
        var curNode = this.root;
        for (var i = 0; i < word.length; i++) {
            var charIndex = this.charIndex(word, i);
            if (i == word.length - 1 && curNode.children[charIndex] && curNode.children[charIndex].val) {
                return true;
            }
            if (!curNode.children[charIndex]) {
                return false;
            }
            curNode = curNode.children[charIndex];
        }
        return false;
    };
    Trie.prototype.startsWith = function (prefix) {
        var curNode = this.root;
        for (var i = 0; i < prefix.length; i++) {
            var charIndex = this.charIndex(prefix, i);
            if (i == prefix.length - 1 && curNode.children[charIndex]) {
                return true;
            }
            if (!curNode.children[charIndex]) {
                return false;
            }
            curNode = curNode.children[charIndex];
        }
        return false;
    };
    return Trie;
}());
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
//# sourceMappingURL=208.implement-trie-prefix-tree.js.map