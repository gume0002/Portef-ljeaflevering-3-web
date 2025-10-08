// 06 - Dice Rolling Championship

// ----------- LEVEL 1 START ----------
// Min plan: bruge prompt funktionen så man kan indsætte sit navn.

// Gør så spillerne kan skrive deres navn
const player1 = prompt("Player 1's name:")
const player2 = prompt("Player 2's name:")


// Skriver "Welcome to the Dice Rolling Championship!" med navnene
console.log("Welcome to the Dice Rolling Championship!")
console.log("Player 1: " + player1)
console.log("Player 2: " + player2)
// ------------ LEVEL 1 SLUT -----------


// ------------- LEVEL 2 START ----------
/* Min plan: Lave en funktion som tager et tilfældigt "dice roll"
// Lave et window.prompt function, som sætter hele funktionen igang

Laver en funktion som tager et tilfældigt tal fra mit array.
 */

const randomDiceRoll = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll; // Jeg vil gerne have svaret fra rollet, derfor returner jeg roll.
}
// ------------- LEVEL 2 SLUT ----------


/* --------- LEVEL 3 START ------------
Jeg skal lave variabler til at gemme totals

Starter med at sætte totalen til 0 fra start:

let getTotalPlayer1 = 0; // Variabel til Player1 som kan ændre sig
let getTotalPlayer2 = 0; // Variabel til Player2 som kan ændre sig

Variabler som jeg har kaldt getTotalPlayer1 og getTotalPlayer2, ser sådan her ud:

getTotalPlayer1 = getTotalPlayer1 + roll1; // Lægger resultatet til totalen
getTotalPlayer2 = getTotalPlayer2 + roll1; // Lægger resultatet til totalen

De er blevet brugt i min spil, som kan ses længere nede

---------- LEVEL 3 SLUT ---------
*/



/* ------------VERSION MED 2 RUNDER STARTER / NU BRUGT SOM TEST----------------

const rounds = 2; // Antal runder jeg vil have.

// Jeg bruger et loop i stedet for at skrive det hele flere gange
for (let i = 1; i <= rounds; i++) {
    console.log("------Round " + i + "------"); // Logger at det er ROUND

    // Player 1's tur -------
    prompt(player1 + " Press enter to roll the dice") // Laver et prompt så man skal trykke enter
    const roll1 = randomDiceRoll(); // Nu er roll1 det samme som udfaldet af randomDiceRoll

    console.log(player1 + " presses enter to roll");
    console.log(player1 + " rolled: " + roll1);

    getTotalPlayer1 = getTotalPlayer1 + roll1; // Lægger resultatet til totalen

    // Player 2's tur -------
    prompt(player2 + " Press enter to roll the dice"); // Laver et prompt så man skal trykke enter

    const roll2 = randomDiceRoll(); // Nu er roll2 det samme som udfaldet af randomDiceRoll
    console.log(player2 + " presses enter to roll");
    console.log(player2 + " rolled: " + roll2);

    getTotalPlayer2 = getTotalPlayer2 + roll2; // Lægger resultatet til totalen
}

console.log("----------TOTAL----------")

// Player 1 total
    console.log(player1 + " (Total: " + getTotalPlayer1 + ")"); // Logger totalen for Player1

// Player 2 total
    console.log(player2 + " (Total: " + getTotalPlayer2 + ")"); // Logger totalen for Player2

*/
// --------------VERSION MED 2 RUNDER SLUTTER---------------------


// --------------VERSION MED 10 RUNDER STARTER---------------------


console.log("----------COMPLETE GAME----------")
// Level 4 - Complete games (10 Rounds)
// Min plan er at lave forLoop som kører 10 runder

let getTotalPlayer1 = 0; // Så total variblen starter på 0
let getTotalPlayer2 = 0; // Så total variblen starter på 0

const rounds = 10

for (let i=1; i <= rounds; i++) {
    console.log("--------Round " + i + "--------");
    const resultsPlayer1 = randomDiceRoll();

    // Player 1's tur -------
    prompt(player1 + " Press enter to roll the dice") // Laver et prompt så man skal trykke enter
    const roll1 = randomDiceRoll(); // Nu er roll1 det samme som udfaldet af randomDiceRoll

    getTotalPlayer1 = getTotalPlayer1 + roll1; // Lægger resultatet til totalen

    console.log(player1 + " presses enter to roll");
    console.log(player1 + " rolled: " + roll1 + " (Total: " + getTotalPlayer1 + ")");




    // Player 2's tur -------
    prompt(player2 + " Press enter to roll the dice"); // Laver et prompt så man skal trykke enter
    const resultsPlayer2 = randomDiceRoll();
    const roll2 = randomDiceRoll(); // Nu er roll2 det samme som udfaldet af randomDiceRoll

    getTotalPlayer2 = getTotalPlayer2 + roll2; // Lægger resultatet til totalen

    console.log(player2 + " presses enter to roll");
    console.log((player2 + " rolled: " + roll2) + " (Total: " + getTotalPlayer2 + ")");

}

console.log("----------TOTAL----------")

// Player 1 total
console.log(player1 + " (Total: " + getTotalPlayer1 + ")"); // Logger totalen for Player1

// Player 2 total
console.log(player2 + " (Total: " + getTotalPlayer2 + ")"); // Logger totalen for Player2


// --------------VERSION MED 10 RUNDER SLUTTER---------------------

// ------ AFSLUTNING --------

console.log("----------GAME OVER----------")
console.log("---------FINAL SCORES---------")

if (getTotalPlayer1 < getTotalPlayer2) { // Lavet en if sætning, som gør at den printer
    console.log(player2 + " wins the championship!")
} else if (getTotalPlayer1 > getTotalPlayer2) {
    console.log(player1 + " wins the championship!")
}