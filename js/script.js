function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId) {
        if(argMoveId == 1) {
            return 'kamień';
        }
        else if(argMoveId == 2) {
            return 'papier';      
        }
        else if(argMoveId == 3) {
            return 'nożyce';  
        }    
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    function displayResult(argComputerMove, argPlayerMove) {
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
  }     else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
  }     else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
  }     else if (playerMove == computerMove) {
            printMessage('Remis');
  }     else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }



    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);



    printMessage('Mój ruch to: ' + computerMove);



    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);


    displayResult(computerMove, playerMove);
}
document.getElementById('rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('scissors').addEventListener('click', function(){
    playGame(3);
});