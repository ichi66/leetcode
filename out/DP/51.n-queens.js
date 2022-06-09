/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */
// @lc code=start
function solveNQueens(n) {
    var res = [];
    var board = new Array(n);
    for (var i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');
    }
    var backtracking = function (row) {
        if (row == n) {
            var newBoard = [];
            for (var i = 0; i < board.length; i++) {
                newBoard.push(board[i].join(''));
            }
            res.push(newBoard);
            return;
        }
        for (var col = 0; col < board[row].length; col++) {
            if (!isValid(row, col, board)) {
                continue;
            }
            board[row][col] = 'Q';
            backtracking(row + 1);
            board[row][col] = '.';
        }
    };
    backtracking(0);
    return res;
}
;
function isValid(row, col, board) {
    return checkTop(row, col, board) && checkTopLeft(row, col, board) && checkTopRight(row, col, board);
}
;
function checkTop(row, col, board) {
    // no Q in current col (not on top)
    for (var i = row; i >= 0; i--) {
        if (board[i][col] == 'Q') {
            return false;
        }
    }
    return true;
}
function checkTopLeft(row, col, board) {
    // no q in top left
    var i = row;
    var j = col;
    while (i >= 0 && j >= 0) {
        if (board[i][j] == 'Q') {
            return false;
        }
        i--;
        j--;
    }
    return true;
}
function checkTopRight(row, col, board) {
    // no q in top left
    var i = row;
    var j = col;
    while (i >= 0 && j < board.length) {
        if (board[i][j] == 'Q') {
            return false;
        }
        i--;
        j++;
    }
    return true;
}
// @lc code=end
//# sourceMappingURL=51.n-queens.js.map