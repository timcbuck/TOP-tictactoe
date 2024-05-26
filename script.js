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

    const placeSymbol = (pos) => {
        let symbol = activePlayer.symbol;
        if (board[pos] === '') {
            board[pos] = symbol;
            changeActivePlayer();
            DisplayController.updateBoard();
            let winner = checkState();
            if (winner != 0) {
                DisplayController.displayWinner(winner);
            }
        }
    }

    return { print, getBoard, resetBoard, placeSymbol };   
})();


const DisplayController = (function () {
    const board = GameBoard.getBoard();
    
    const updateBoard = () => {
        const divBoard = document.getElementById('board');
        let i = 0;
        for (const divBoardItem of divBoard.children) {
            divBoardItem.innerText = board[i];
            if (divBoardItem.innerText != '') {
                divBoardItem.classList.add('locked');
            }
            i++;
        }
    }

    const displayWinner = (winner) => {
        let winnerText = document.getElementById('winnerText');
        if (winner == 1) {
            winnerText.innerText = "Congratulations, " + player1.name + ". You won!";
        } else if (winner == 2) {
            winnerText.innerText = "Congratulations, " + player2.name + ". You won!";
        }
    }

    return { updateBoard, displayWinner };
})();


function changeActivePlayer() {
    if (activePlayer == player1) {
        activePlayer = player2;
    } else {
        activePlayer = player1;
    }
}


function placeSymbol(pos) {
    return function () {
        GameBoard.placeSymbol(pos);
    }
}


function checkState() {
    // Check all winning conditions
    let row1 = document.getElementsByClassName('row-1');
    let row2 = document.getElementsByClassName('row-2');
    let row3 = document.getElementsByClassName('row-3');
    let col1 = document.getElementsByClassName('col-1');
    let col2 = document.getElementsByClassName('col-2');
    let col3 = document.getElementsByClassName('col-3');
    let diag1 = document.getElementsByClassName('diag-1');
    let diag2 = document.getElementsByClassName('diag-2');
    let winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];
    for(let i = 0; i < winConditions.length; i++) {
        let x = [];
        let o = [];
        Array.from(winConditions[i]).forEach((el) => {
            if(el.innerText === "X") {
                x.push(1);
            } else if (el.innerText === "O") {
                o.push(1);
            }
        });
        if (x.length === 3) {
            console.log("Player 1 wins!");
            return 1;
        }
        else if (o.length === 3) {
            console.log("Player 2 wins!");
            return 2;
        }
    }
}


player1 = createPlayer("Tim", "X");
player2 = createPlayer("Ora", "O");
activePlayer = player1;


const placeSymbol0 = placeSymbol(0);
const placeSymbol1 = placeSymbol(1);
const placeSymbol2 = placeSymbol(2);
const placeSymbol3 = placeSymbol(3);
const placeSymbol4 = placeSymbol(4);
const placeSymbol5 = placeSymbol(5);
const placeSymbol6 = placeSymbol(6);
const placeSymbol7 = placeSymbol(7);
const placeSymbol8 = placeSymbol(8);
document.getElementById("0").onclick = placeSymbol0;
document.getElementById("1").onclick = placeSymbol1;
document.getElementById("2").onclick = placeSymbol2;
document.getElementById("3").onclick = placeSymbol3;
document.getElementById("4").onclick = placeSymbol4;
document.getElementById("5").onclick = placeSymbol5;
document.getElementById("6").onclick = placeSymbol6;
document.getElementById("7").onclick = placeSymbol7;
document.getElementById("8").onclick = placeSymbol8;