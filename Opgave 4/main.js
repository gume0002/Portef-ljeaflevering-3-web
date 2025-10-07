// 04 - Student Grades Analysis

const grades = [78, 82, 95, 25, 76, 89, 11, 65] // Lavet et array med 8 værdier/karaktere

console.log("There is a total of " +grades.length +" grades") // Loggede hvor mange karaktere der er i alt.

for (let i= 0; i < grades.length; i++) {  // Jeg har lavet et forLoop som har en masse "conditions"
    if (grades[i] > 90) {
        console.log("Du har fået A")
    } else if (grades[i] >= 80 && grades[i] <= 89){
        console.log("Du har fået B");
    } else if (grades[i] >= 70 && grades[i] <= 79){
        console.log("Du har fået C");
    } else if (grades[i] >= 60 && grades[i] <= 69){
        console.log("Du har fået D");
    } else if (grades[i] > 60) {
        console.log("Du har fået F");
    }
} // I bund og grund siger den "Hvis tallet er højere end 90 print det her, og hvis tallet er mellem 80 og 89, print det her.

// Min plan er at lave en function som først finder summen af mit array

let sum = 0

forEach