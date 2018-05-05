var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var compChoice = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b",];

document.onkeyup = function (event) {

    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
    guesses.push(playerGuess);

    if (playerGuess == computerGuess) {
        wins++;
        alert("You win");
        guessesLeft = 9;
        guesses.lenght = 0;
    }

    else if (guessesLeft == 0) {
        losses++;
        alert("You lose");
        guessesLeft = 9;
        guesses.lenght = 0;  // I dont know how to make the letter guess reset :S
    }

    else if (playerGuess !== computerGuess) {
        guessesLeft--;
    }
    
    var html =
        "<p>Total Wins: " +
        wins +
        "</p>" +
        "<p>Total Losses: " +
        losses +
        "</p>" +
        "<p>Guesses Left: " +
        guessesLeft +
        "</p>" +
        "<p>Your Guesses: " +
        guesses +
        "</p>";
        
    document.querySelector('#game').innerHTML = html;
}



