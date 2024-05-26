let activePlayer = null;

function createPlayer(name, symbol) {
    let score = 0;
    const getScore = () => score;
    const incScore = () => score++;

    return { name, symbol, getScore, incScore };
}

const gameboard = (function () {
    const board = [ 0, 1, 2,
                    3, 4, 5,
                    6, 7, 8 ];

    const update = (symbol, pos) => {
        board[pos] = symbol;
    }

    const print = () => {
        for (let i = 0; i < 9; i+=3) {
            console.log(board[i] + "|" + board[i+1] + "|" + board[i+2]);
        }
    }
    return { board, update, print };   
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
        const boardItem = document.getElementById(pos);
        if (boardItem.classList.contains('locked')) {
            return;
        } else {
            boardItem.innerText = activePlayer.symbol;
            boardItem.classList.add('locked');
            changeActivePlayer();
        }

    }
}

player1 = createPlayer("Tim", "X");
player2 = createPlayer("Ora", "O");
changeActivePlayer();

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
