function knapsack(w: number, val: number[], weight: number[]){
  const dpTable = new Array(val.length + 1);
  for(let i =0; i < dpTable.length + 1; i++){
    dpTable[i] = new Array(w + 1).fill(0);
  }
  for(let curWeight = 1; curWeight < w + 1; curWeight++){
    for(let i = 1; i < val.length + 1; i++){
      if( weight[i] > curWeight){
        dpTable[i][curWeight] = dpTable[i - 1][curWeight];
      }else{
        const addItem = dpTable[i - 1][curWeight - weight[i - 1]] + val[i-1];
        const notAddItem = dpTable[i-1][curWeight];
        dpTable[i][curWeight] =  Math.max( addItem, notAddItem);
      }
    }
  }
  return dpTable[val.length][w];

}