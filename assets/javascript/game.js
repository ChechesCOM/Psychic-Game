var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var compChoice = [q, w, e, r, t, y, u, i, o];

document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoice[Math.floor(Math.random()*computerChoices.length)];

    if (playerGuess == computerGuess) {
        wins ++;
        alert: ("You win");
        guessesLeft = 9;
        guessesSoFar.lenght = 0;

    }

    else if (guessesLeft == 0){
        losses++;
        alert: ("You lose");
        guessesLeft = 9;
        guessesSoFar.lenght = 0;
    }
    else if (playerGuess !== computerGuess) {
        guessesLeft--;
        
    }

    
}