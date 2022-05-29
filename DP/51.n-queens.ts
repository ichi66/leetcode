/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  const res = [];
  const board = new Array(n);
  for(let i = 0; i < n; i++){
    board[i] = new Array(n).fill('.');
  }
  const backtracking = (row : number) =>{
    if(row == n){
      const newBoard = [];
      for(let i = 0; i < board.length; i++){
        newBoard.push(board[i].join(''));
      }
      res.push(newBoard);
      return;
    }

    for(let col = 0; col < board[row].length; col++){
      if(!isValid(row, col, board)){
        continue;
      }
      board[row][col] = 'Q';
      backtracking(row+1);
      board[row][col] = '.';  
    }

  }
  backtracking(0);
  return res;

};


function isValid (row: number, col: number, board: string[][],) : boolean {

  return checkTop(row, col, board) && checkTopLeft(row,col,board) && checkTopRight(row,col, board);
  
 };

 function checkTop(row: number, col: number, board: string[][],) : boolean{
     // no Q in current col (not on top)
  for(let i = row; i >=0 ; i--){
    if(board[i][col] == 'Q'){
      return false;
    }
  }




  return true;
 }

 function checkTopLeft(row: number, col: number, board: string[][]) : boolean{
  // no q in top left
  let i = row;
  let j = col;
  while(i >= 0 && j>=0){
    if(board[i][j] == 'Q'){
      return false;
    }
    i--;
    j--;
  }
  return true;
 }


 function checkTopRight(row: number, col: number, board: string[][]) : boolean{
    // no q in top left
    let i = row;
    let j = col;
    while(i >= 0  && j < board.length){
      if(board[i][j] == 'Q'){
        return false;
      }
      i--;
      j++;
    }
    return true;


 }
// @lc code=end

