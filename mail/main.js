// Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

// array with authorized email addresses
var list = [ "pinco.pallino@gmail.com", "johndoe@hotmail.it", "jane.doe@yahoo.it", "nome.cognome@gmail.com", "cognomenomenumero@gmail.com" ];

// initialize email counter
var j = false;

// ask user their email address
var email = prompt( "Please enter your email address" );

// for loop checks if the given email is in the list, when a match is found j becomes true
for ( var i = 0; i < list.length; i++ ) {
    if ( isRegistered( email, list[i] ) ) {
        j = true;
        break;
    }
}

// if j > 0 the email given is in the list
if ( j == true ) {
    console.log( "You have entered a registered email address." );
// else the email given is not the list
} else {
    console.log( "Your email address was not found." );
}

// function that compares two strings
function isRegistered( a, b ) {
    return a == b;
}
