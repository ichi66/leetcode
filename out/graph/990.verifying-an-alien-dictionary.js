/*
 * @lc app=leetcode id=990 lang=typescript
 *
 * [990] Satisfiability of Equality Equations
 */
// @lc code=start
var DisjointSet = /** @class */ (function () {
    function DisjointSet() {
        this.collection = [];
        this.parent = [];
    }
    // find parent
    DisjointSet.prototype.find = function (el) {
        var index = this.collection.indexOf(el);
        if (this.parent[index] != index) {
            var pIndex = this.parent[index];
            this.parent[index] = this.find(this.collection[pIndex]);
        }
        return this.parent[index]; // crucial!!!!!! 不能 return this.index;
    };
    DisjointSet.prototype.union = function (a, b) {
        this.parent[this.find(a)] = this.find(b);
    };
    DisjointSet.prototype.add = function (a) {
        if (this.collection.indexOf(a) > -1) {
            return;
        }
        this.collection.push(a);
        this.parent.push(this.collection.length - 1); // parent is itself
    };
    DisjointSet.prototype.isConnected = function (a, b) {
        return this.find(a) === this.find(b);
    };
    return DisjointSet;
}());
function equationsPossible(equations) {
    var uf = new DisjointSet();
    var isPossible = true;
    for (var _i = 0, equations_1 = equations; _i < equations_1.length; _i++) {
        var el = equations_1[_i];
        var charA = el[0];
        var charB = el[3];
        var operator = el.substring(1, 3);
        uf.add(charA);
        uf.add(charB);
        if (operator === '==') {
            uf.union(charA, charB);
        }
    }
    for (var _a = 0, equations_2 = equations; _a < equations_2.length; _a++) {
        var el = equations_2[_a];
        var charA = el[0];
        var charB = el[3];
        var operator = el.substring(1, 3);
        uf.add(charA);
        uf.add(charB);
        if (operator === '!=' && uf.isConnected(charA, charB)) {
            isPossible = false;
            break;
        }
    }
    return isPossible;
}
;
// @lc code=end
//# sourceMappingURL=990.verifying-an-alien-dictionary.js.map