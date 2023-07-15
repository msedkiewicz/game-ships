/* Ship localization variables */
let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

/* Game variables */
let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

/* Shoot checking code */

while (isSunk === false) {
    guess = prompt("Gotów? Cel, pal! (Podaj liczbę z zakresu od 0 do 6):");

    if (guess < 0 || guess > 6) {
        alert("Proszę podać prawidłowy numer (od 0 do 6)!");
    } else {
        guesses = guesses + 1;

        /* checking if ship was hit */
        if ( guess == location1 || guess == location2 || guess == location3) {
            alert("Trafiony!");
            hits = hits + 1;

            /* checking if ship was sunk or if game is still on */
            if (hits == 3) {
                isSunk = true;
                alert("Zatopiłeś mój okręt!");
            }
        } else {
            alert("Pudło!")
        }
    }
}

const stats = "Potrzebowałeś " + guesses + " prób, by zatopić okręt, czyli Twoja efektywność wynosi: " + (3/guesses) + ".";
alert(stats);