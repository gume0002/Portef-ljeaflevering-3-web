// 02 - Startup name generator

function getStartupName (){
    // Array 1: First part of the startup name
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

    // Array 2: Second part of the startup name
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    const randomFirst = Math.floor(Math.random() * firstWords.length);
    const randomSecond = Math.floor(Math.random() * secondWords.length);


    return firstWords[randomFirst] + " " + secondWords[randomSecond];
}

console.log("Your startup name could be: "+ getStartupName())

