// 04 - Student Grades Analysis

// 01
const grades = [78, 82, 95, 25, 76, 89, 11, 65] // Lavet et array med 8 værdier/karaktere
// 02
console.log("There is a total of " +grades.length +" grades") // Loggede hvor mange karaktere der er i alt.
// 03
for (let i= 0; i < grades.length; i++) {  // Jeg har lavet et forLoop som har en masse "conditions"
    if (grades[i] > 90) {
        console.log("Du har fået " + grades[i]+" point " + "- du har fået A")
    } else if (grades[i] >= 80 && grades[i] <= 89){
        console.log("Du har fået " + grades[i]+" point " + "- du har fået B");
    } else if (grades[i] >= 70 && grades[i] <= 79){
        console.log("Du har fået " + grades[i]+" point " + "- du har fået C");
    } else if (grades[i] >= 60 && grades[i] <= 69){
        console.log("Du har fået " + grades[i]+" point " + "- du har fået D");
    } else if (grades[i] < 60) {
        console.log("Du har fået " + grades[i]+" point " + "- du har fået F");
    }
} // I bund og grund siger den "Hvis tallet er højere end 90 print det her, og hvis tallet er mellem 80 og 89, print det her.

// 04 - Min plan er at lave en function som først finder summen af mit array

// samme fra før = const grades = [78, 82, 95, 25, 76, 89, 11, 65]
let sum = 0 // sagt at sum er ligmed 0 til at starte med

for (let i = 0; i < grades.length; i++) { // simpelt forLoop som tager først tager index 0 og plusser med næste, derefter tager 0 og 1, og plusser med 2 osv.
    sum = sum + grades[i] // Fortæller at summmen skal opdatere i hver itterering

}
const average = sum / grades.length; // Gør at vi har en "average" som vi kan bruge i vores log.

    console.log(average) // logger average

// Nu skal jeg lave et forLoop som skal undersøge hvilken kategori som min sum skal sættes i.

if (average > 90) {
    console.log("The class perfomance is Excellent.")
} else if (average >= 80 && average <= 89) {
    console.log("The perfomance is Good.")
} else if (average >= 70 && average <= 79) {
    console.log("The perfomance is Satisfactory")
} else if (average < 70) {
    console.log("The perfomance needs Improvement")
}

