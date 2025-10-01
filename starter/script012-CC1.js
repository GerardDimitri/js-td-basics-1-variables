/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
const weightMark = 78;   // en kg
const heightMark = 1.69; // en m

const weightJohn = 92;   // en kg
const heightJohn = 1.95; // en m

// 2. Calculez le BMI de chacun.

const bmiMark = weightMark / (heightMark * heightMark); //  Math.pow(heightMark,2);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
const markHigherBMI = bmiMark > bmiJohn;
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").

console.log("BMI de Mark : " + bmiMark);
console.log("BMI de John : " + bmiJohn);
console.log("Est-ce que le BMI de Mark est plus élevé que celui de John ? " + markHigherBMI);

// BONNE CHANCE 😀