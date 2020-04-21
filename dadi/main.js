// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

// ask player for a number between 1 and 6
var playerNumber = prompt("Please enter a number between 1 and 6");

var cpuNumber = ( ( Math.floor( Math.random() * 10 ) % 6 ) + 1 );

if ( playerNumber > cpuNumber ) {
    document.writeln("Player: " + playerNumber + ", Cpu: " + cpuNumber + ". You win!");
} else if ( playerNumber < cpuNumber ) {
    document.writeln("Player: " + playerNumber + ", Cpu: " + cpuNumber + ". You lose!");
} else {
    document.writeln("Player: " + playerNumber + ", Cpu: " + cpuNumber + ". It's a tie!");
}
