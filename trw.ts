function trap(height: number[]): number {

  let start: number  = 0;
  let end: number  = height.length - 1;
  let answer: number = 0;

  while(height[start] <= height[start+1]){
    start++;
  }
  while(height[end] <= height[end-1]){
    end--;
  }

  if(start >= end){
    return answer;
  }

  let trimedHeight = height.slice(start, end + 1);
  let leftBound = 0;
  let isDecrease : boolean= true;

  for(let i = 1; i< trimedHeight.length; i++){
    if(i === trimedHeight.length - 1){
      answer = answer + helper(trimedHeight, leftBound, i);
      break;
    }


    if(trimedHeight[i] >= trimedHeight[leftBound] && trimedHeight[i +1] < trimedHeight[i]){
      answer = answer + helper(trimedHeight, leftBound, i);
      leftBound = i;
      isDecrease= true;
    }

  }

  return answer;
};


function helper(height: number[], start: number, end: number): number{
  let area = 0;
  if(start >= end){
    return area;
  }
  let bouderHeight = Math.min(height[start], height[end]);
  for(let i = start; i < end; i++ ){
    if(bouderHeight - height[i] >0){
      area = bouderHeight - height[i] + area;
    }
    
  }
  return area;

}


console.log(trap([9,6,8,8,5,6,3]));