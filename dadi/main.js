// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

// ask player for a number between 1 and 6
var playerNumber = prompt( "Please enter a number between 1 and 6" );

// get a random number in range between 1 and 6
var cpuNumber = ( Math.floor( Math.random() * 6 ) + 1 );

// compare playerNumber and cpuNumber
// if playerNumber is greater than cpuNumber, the player wins
if ( playerNumber > cpuNumber ) {
    console.log( "Player: " + playerNumber + ", Cpu: " + cpuNumber + ". You win!" );
    // if playerNumber is lower than cpuNumber, cpu wins
} else if ( playerNumber < cpuNumber ) {
    console.log( "Player: " + playerNumber + ", Cpu: " + cpuNumber + ". You lose!" );
    // if playerNumber is equal to cpuNumber, it's a tie
} else {
    console.log( "Player: " + playerNumber + ", Cpu: " + cpuNumber + ". It's a tie!" );
}
