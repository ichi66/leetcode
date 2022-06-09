function knapsack(w, val, weight) {
    var dpTable = new Array(val.length + 1);
    for (var i = 0; i < dpTable.length + 1; i++) {
        dpTable[i] = new Array(w + 1).fill(0);
    }
    for (var curWeight = 1; curWeight < w + 1; curWeight++) {
        for (var i = 1; i < val.length + 1; i++) {
            if (weight[i] > curWeight) {
                dpTable[i][curWeight] = dpTable[i - 1][curWeight];
            }
            else {
                var addItem = dpTable[i - 1][curWeight - weight[i - 1]] + val[i - 1];
                var notAddItem = dpTable[i - 1][curWeight];
                dpTable[i][curWeight] = Math.max(addItem, notAddItem);
            }
        }
    }
    return dpTable[val.length][w];
}
//# sourceMappingURL=classic_knapsak.js.map