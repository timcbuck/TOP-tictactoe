function createPlayer(name) {
    let score = 0;
    const getScore = () => score;
    const incScore = () => score++;

    return { name, getScore, incScore };
}

const gameboard = (function () {
    const board = [ 0, 1, 2,
                    3, 4, 5,
                    6, 7, 8 ];

    const updateBoard = (symbol, pos) => {
        board[pos] = symbol;
    }
    
    const printBoard = () => {
        for (let i = 0; i < 9; i+=3) {
            console.log(board[i] + "|" + board[i+1] + "|" + board[i+2]);
        }
    }
    return { board, updateBoard, printBoard };   
})();

player1 = createPlayer("Tim");