const Board = function (name) {
    const boardType = name;
    const cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const printBoard = () => console.log("|%s|%s|%s|\n|%s|%s|%s|\n|%s|%s|%s|\n", cells[0], cells[1],cells[2],cells[3],cells[4],cells[5],cells[6],cells[7],cells[8]);
    const populateBoard = (player, cell) => {        
        player === 1 ? cells[cell] = 'X' : cells[cell] = 'O';
    }
    const checkWin = (mark) => {
        if (cells[0] == cells[1] && cells[0] == cells[2] ||
            cells[3] == cells[4] && cells[3] == cells[5] ||
            cells[6] == cells[7] && cells[6] == cells[8] ||

            cells[0] == cells[3] && cells[0] == cells[6] ||
            cells[1] == cells[4] && cells[1] == cells[7] ||
            cells[2] == cells[5] && cells[2] == cells[2]){
            return 1;
        }
        return false;
    }
    return {boardType, printBoard, populateBoard, checkWin};
}

const gameBoard = Board("testboard");

//Game Loop;
function loop(){
let count = 0;
let player = 1;
gameBoard.printBoard();
while (count < 9){
        let input = parseInt(prompt("Choose a cell"));

        while (input < 1 || input > 9){
            input = prompt("choose again");
    }
        input--;

    gameBoard.populateBoard(player, input);
    console.clear();
    gameBoard.printBoard();
    if (gameBoard.checkWin()){
        console.log("Player: %s WON !!", player);
        return;
    }
    player = (player % 2) + 1;
    count++;
}
}

loop()