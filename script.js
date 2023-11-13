const Board = function (name) {
    const boardType = name;
    const cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const printBoard = () => console.log("|%s|%s|%s|\n|%s|%s|%s|\n|%s|%s|%s|\n", cells[0], cells[1],cells[2],cells[3],cells[4],cells[5],cells[6],cells[7],cells[8]);
    const populateBoard = (player, cell) => {      
          if(cells[cell] != " "){
            return -1;2

          }
        player === 1 ? cells[cell] = 'X' : cells[cell] = 'O';
    }
    const checkWin = () => {
        if ((cells[0] == 'X' || cells[0] == 'O') && cells[0] == cells[1] && cells[0] == cells[2] ||
            (cells[3] == 'X' || cells[3] == 'O') && cells[3] == cells[4] && cells[3] == cells[5] ||
            (cells[6] == 'X' || cells[6] == 'O') && cells[6] == cells[7] && cells[6] == cells[8] ||

            (cells[0] == 'X' || cells[0] == 'O') && cells[0] == cells[3] && cells[0] == cells[6] ||
            (cells[1] == 'X' || cells[1] == 'O') && cells[1] == cells[4] && cells[1] == cells[7] ||
            (cells[2] == 'X' || cells[2] == 'O') && cells[2] == cells[5] && cells[2] == cells[2]){
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
        let input = parseInt(prompt("Choose a cell")) - 1;

        while ((input < 0 || input > 8) || gameBoard.populateBoard(player, input) == -1){
            input = prompt("choose again") - 1;
    }
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