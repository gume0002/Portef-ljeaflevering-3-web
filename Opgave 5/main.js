// 06 - Dice Rolling Championship

// Level 1 - Min plan: bruge prompt funktionen så man kan indsætte sit navn.


let player1 = prompt ("Player 1's name:")
let player2 = prompt ("Player 2's name:")

console.log("Welcome to the Dice Rolling Championship!")
console.log(player1, player2)

// Level 2 - Min plan: lave et array, hvor der er en funktion som tager et tilfældigt "dice roll"
// Lave et window.prompt function, som sætter hele funktionen igang
const diceRolls = [1,2,3,4,5,6];

const randomDiceRoll = () => {
    const roll = Math.floor(Math.random() *6) + 1;
    return roll;
}

const resultPlayer1 = randomDiceRoll()
{
    console.log("Round 1")
    console.log(player1 + " presses Enter to roll")
    console.log(player1 + " rolled: " + resultPlayer1);
}

const resultPlayer2 = randomDiceRoll()
{
    console.log(player2 + " presses Enter to roll")
    console.log(player2 + " rolled: " + resultPlayer2);
}