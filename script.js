let activePlayer = null;

function createPlayer(name, symbol) {
    let score = 0;
    const getScore = () => score;
    const incScore = () => score++;

    return { name, symbol, getScore, incScore };
}

const GameBoard = (function () {
    let board = [ '', '', '', '', '', '', '', '', '' ];

    const print = () => {
        for (let i = 0; i < 9; i+=3) {
            console.log(board[i] + "|" + board[i+1] + "|" + board[i+2]);
        }
        console.log(" ");
    }

    const getBoard = () => board;

    const resetBoard = () => {
        board = [ '', '', '', '', '', '', '', '', '' ];
    }

    const placeSymbol = (symbol, pos) => {
        board[pos] = symbol;
    }

    return { print, getBoard, resetBoard, placeSymbol };   
})();

const DisplayController = (function () {

})();

function changeActivePlayer() {
    if (activePlayer == player1) {
        activePlayer = player2;
    } else {
        activePlayer = player1;
    }
}

function placeSymbol(pos) {
    return function() {
        const boardPos = document.getElementById(pos);
        // If symbol is already placed there, don't do anything
        if (boardPos.classList.contains('locked')) {
            return;
        } else {
            // Else place the symbol and lock that board position
            boardPos.innerText = activePlayer.symbol;
            boardPos.classList.add('locked');

            // Update console board
            GameBoard.update(activePlayer.symbol, pos);
            GameBoard.print();
            checkState();
            changeActivePlayer();
        }
    }
}

function checkState() {
    let x = [];
    let o = [];
    let row1 = document.getElementsByClassName('row-1');
    Array.from(row1).forEach((el) => {
        if(el.innerText == "X") {
            x.push(1);
        } else if (el.innerText == "O") {
            o.push(1);
        }
    });
    // if length of X or O is 3 then there is a winner!
}

player1 = createPlayer("Tim", "X");
player2 = createPlayer("Ora", "O");
activePlayer = player1;

// Add functions to board items
const placeSymbol0 = placeSymbol('0');
const placeSymbol1 = placeSymbol('1');
const placeSymbol2 = placeSymbol('2');
const placeSymbol3 = placeSymbol('3');
const placeSymbol4 = placeSymbol('4');
const placeSymbol5 = placeSymbol('5');
const placeSymbol6 = placeSymbol('6');
const placeSymbol7 = placeSymbol('7');
const placeSymbol8 = placeSymbol('8');
document.getElementById('0').onclick = placeSymbol0;
document.getElementById('1').onclick = placeSymbol1;
document.getElementById('2').onclick = placeSymbol2;
document.getElementById('3').onclick = placeSymbol3;
document.getElementById('4').onclick = placeSymbol4;
document.getElementById('5').onclick = placeSymbol5;
document.getElementById('6').onclick = placeSymbol6;
document.getElementById('7').onclick = placeSymbol7;
document.getElementById('8').onclick = placeSymbol8;


/*
// 8 win conditions:
row 1
row 2
row 3
col 1
col 2
col 3
diag 1
diag 2
*/