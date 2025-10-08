// 06 - Dice Rolling Championship

// Level 1 - Min plan: bruge prompt funktionen så man kan indsætte sit navn.

// Gør så spillerne kan skrive deres navn
const player1 = prompt ("Player 1's name:")
const player2 = prompt ("Player 2's name:")

// Skriver "Welcome to the Dice Rolling Championship!" med navnene
console.log("Welcome to the Dice Rolling Championship!")
console.log("Player 1: " +player1)
console.log("Player 2: " +player2)
console.log("--------------------")

// Level 2 - Min plan: Lave en funktion som tager et tilfældigt "dice roll"
// Lave et window.prompt function, som sætter hele funktionen igang


// Laver en funktion som tager et tilfældigt tal fra mit array.
const randomDiceRoll = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll; // Jeg vil gerne have svaret fra rollet, derfor returner jeg roll.
}

    console.log("Round 1"); // Logger at det er round 1


// Player 1's tur
prompt(player1 + " Press enter to roll the dice") // Laver et prompt så man skal trykke enter
const resultPlayer1 = randomDiceRoll(); // Nu er resultPlayer1, det samme som udfaldet af randomdiceRoll

    console.log(player1 + " presses Enter to roll");
    console.log(player1 + " rolled: " + resultPlayer1);


// Player 2's tur

prompt(player2 + " Press enter to roll the dice"); // Laver et prompt så man skal trykke enter
const resultPlayer2 = randomDiceRoll(); // Nu er resultPlayer1, det samme som udfaldet af randomdiceRoll

    console.log(player2 + " presses Enter to roll");
    console.log(player2 + " rolled: " + resultPlayer2);


// Level 3 -  Track scores
// Min plan: Kunne forestille mig jeg skal lave et let variabel som kan ændrer sig efter hvad de slår
// Måske skal jeg lave en forEach funktion og en sum funktion.

// Variabler for spillerne, så den kan huske deres score.

console.log("--------------------")
// Player 1 total
let getTotalPlayer1 = 0; // Variabel til Player1 som kan ændre sig
getTotalPlayer1 = getTotalPlayer1 + resultPlayer1;

console.log(player1 + " rolled " + resultPlayer1 + " (Total: " + getTotalPlayer1 + ")")


// Player 2 total
let getTotalPlayer2 = 0; // Variabel til Player2 som kan ændre sig
getTotalPlayer2 = getTotalPlayer2 + resultPlayer2;

console.log(player2 + " rolled " + resultPlayer2 + " (Total: " + getTotalPlayer2 + ")")


// Level 4 - Complete games