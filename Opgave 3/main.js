// 03 - Treasure Hunter

const island = ['-', '-', '-', 'T', '-'];

console.log("There is a total of " +island.length +" moves on the island"); // Her bruger jeg bare island.length som værdi i min console.log

let numberOfTreasures = 0

for (let i=0; i < island.length; i++) { // Lavet et forLoop, som tjekker mit island array igennem.
    if (island[i] === "T") {
        console.log("Treasure found at move " + i + " :)");
        numberOfTreasures++; // Jeg skriver ++ efter, for at fortælle den at skal lægge 1 til hver gang mit statement er sandt.
    } else {
        console.log("No treasure found :(");
    }
}

console.log("There was a total of " + numberOfTreasures + " treasures on the island"); // her bruger jeg numberOfTreasures som værdi, da hvis jeg vil ændre i dataen, hænger den sammen.
// Koden virker også hvis man laver flere treasures i arrayet.

