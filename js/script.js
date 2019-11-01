function getMoveName(argMoveId) {
    if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return 'papier';      
  }
  else if(argMoveId == 3){
    return 'nożyce';  
  }    
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
function displayResult(argComputerMove, argPlayerMove){
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (playerMove == computerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}



let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

//if(playerInput == '1'){
//  playerMove = 'kamień';
//}
//else if(playerInput == '2'){
//    playerMove = 'papier';
//}
//else if(playerInput == '3'){
//    playerMove = 'nożyce';
//}

//printMessage('Twój ruch to: ' + playerMove);
displayResult(computerMove, playerMove);
//if( computerMove == 'kamień' && playerMove == 'papier'){
//  printMessage('Wygrywa Gracz!');
//}
//else if(computerMove == 'papier' && playerMove == 'nożyce'){
//    printMessage('Wygrywa Gracz!');
//}
//else if(computerMove == 'nożyce' && playerMove == 'kamień'){
//    printMessage('Wygrywa Gracz!');
//}
//else if(computerMove == 'nożyce' && playerMove == 'papier'){
//    printMessage('Wygrywa Komputer!');
//}
//else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
//    printMessage('Remis!');
//}
//else if(computerMove == 'papier' && playerMove == 'papier'){
//    printMessage('Remis!');
//}
//else if(computerMove == 'nożyce' && playerMove == 'kamień'){
//    printMessage('Wygrywa Gracz!');
//}
//else if(computerMove == 'kamień' && playerMove == 'nożyce'){
//    printMessage('Wygrywa Komputer!');
//}
//else if(computerMove == 'papier' && playerMove == 'kamień'){
//    printMessage('Wygrywa Komputer!');
//}
//
//else if(computerMove == 'nożyce' && playerMove == 'papier'){
//    printMessage('Wygrywa Komputer!');
//}
//else if(computerMove == 'kamień' && playerMove == 'kamień'){
//    printMessage('Remis!');
//}
//else if(playerMove == 'nieznany ruch'){
//    printMessage('Wybrałeś zły ruch! spróbuj ponownie!');
//}