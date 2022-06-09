/*
 * @lc app=leetcode id=743 lang=typescript
 *
 * [743] Find Smallest Letter Greater Than Target
 */
// @ts-nocheck
// @lc code=start
var Heap = /** @class */ (function () {
    function Heap(comparator) {
        if (comparator === void 0) { comparator = function (a, b) { return a - b; }; }
        var _this = this;
        this.array = [];
        this.comparator = function (i1, i2) {
            var value = comparator(_this.array[i1], _this.array[i2]);
            if (Number.isNaN(value)) {
                throw new Error("Comparator should evaluate to a number. Got ".concat(value, " when comparing ").concat(_this.array[i1], " with ").concat(_this.array[i2]));
            }
            return value;
        };
    }
    /**
     * Insert element
     * @runtime O(log n)
     * @param {any} value
     */
    Heap.prototype.add = function (value) {
        this.array.push(value);
        this.bubbleUp();
    };
    /**
     * Retrieves, but does not remove, the head of this heap
     * @runtime O(1)
     */
    Heap.prototype.peek = function () {
        return this.array[0];
    };
    /**
     * Retrieves and removes the head of this heap, or returns null if this heap is empty.
     * @runtime O(log n)
     */
    Heap.prototype.remove = function (index) {
        if (index === void 0) { index = 0; }
        if (!this.size)
            return null;
        this.swap(index, this.size - 1); // swap with last
        var value = this.array.pop(); // remove element
        this.bubbleDown(index);
        return value;
    };
    Object.defineProperty(Heap.prototype, "size", {
        /**
         * Returns the number of elements in this collection.
         * @runtime O(1)
         */
        get: function () {
            return this.array.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Move new element upwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    Heap.prototype.bubbleUp = function () {
        var index = this.size - 1;
        var parent = function (i) { return Math.ceil(i / 2 - 1); };
        while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
            this.swap(parent(index), index);
            index = parent(index);
        }
    };
    /**
     * After removal, moves element downwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    Heap.prototype.bubbleDown = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var curr = index;
        var left = function (i) { return 2 * i + 1; };
        var right = function (i) { return 2 * i + 2; };
        var getTopChild = function (i) { return (right(i) < _this.size
            && _this.comparator(left(i), right(i)) > 0 ? right(i) : left(i)); };
        while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
            var next = getTopChild(curr);
            this.swap(curr, next);
            curr = next;
        }
    };
    /**
     * Swap elements on the heap
     * @runtime O(1)
     * @param {number} i1 index 1
     * @param {number} i2 index 2
     */
    Heap.prototype.swap = function (i1, i2) {
        var _a;
        _a = [this.array[i2], this.array[i1]], this.array[i1] = _a[0], this.array[i2] = _a[1];
    };
    Heap.prototype.isEmpty = function () {
        return this.array.length == 0;
    };
    return Heap;
}());
var State = /** @class */ (function () {
    function State(index, distFromStart) {
        this.index = index;
        this.distFromStart = distFromStart;
    }
    return State;
}());
function networkDelayTime(times, n, k) {
    var graph = new Array(n + 1);
    for (var i = 0; i < graph.length; i++) {
        graph[i] = new Array();
    }
    // build graph
    // [[[target, weight],[target, weight]]
    // [[],[]]
    // [[],[]]]
    for (var _i = 0, times_1 = times; _i < times_1.length; _i++) {
        var el = times_1[_i];
        var startNode = el[0];
        var targetNode = el[1];
        var weight = el[2];
        graph[startNode].push([targetNode, weight]);
    }
    // b
    var distanceList = dijkstra(graph, k);
    var res = Math.max.apply(Math, distanceList.slice(1));
    console.log('distanceList: ', distanceList);
    return res == Infinity ? -1 : res;
}
;
function dijkstra(graph, start) {
    var res = new Array(graph.length).fill(Infinity);
    var pq = new Heap(function (a, b) { return a.distFromStart - b.distFromStart; });
    if (graph[start].length === 0) {
        return res;
    }
    pq.add(new State(graph[start][0][0], 0));
    // console.log(pq.isEmpty());
    while (!pq.isEmpty()) {
        var curNode = pq.remove();
        console.log('curNode: ', curNode);
        var curIndex = curNode.index;
        var cueDist = curNode.distFromStart;
        for (var _i = 0, _a = graph[curIndex]; _i < _a.length; _i++) {
            var el = _a[_i];
            console.log('el: ', el);
            var targetIndex = el[0], weight = el[1];
            var distToTarget = cueDist + weight;
            if (distToTarget < res[targetIndex]) {
                res[targetIndex] = distToTarget;
                pq.add(new State(targetIndex, distToTarget));
            }
        }
    }
    return res;
}
networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2);
// @lc code=end
//# sourceMappingURL=744.network-delay-time.js.map