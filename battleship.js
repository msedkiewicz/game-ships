/* Ship localization variables */
let location1 = 3;
let location2 = 4;
let location3 = 5;

/* Game variables */
let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

/* checking if ship was sunk or if game is still on */

while (isSunk === false) {
    guess = prompt("Gotów? Cel, pal! (Podaj liczbę z zakresu od 0 do 6):");

    if (guess < 0 || guess > 6) {
        alert("Proszę podać prawidłowy numer (od 0 do 6)!");
    } else {
        guesses = guesses + 1;

        /* checking if ship was hit */
        if ( guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
        }
    }
}