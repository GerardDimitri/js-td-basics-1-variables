/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
let now = 2019;
let ageJohn = 28;
let ageMark = 33;
let yearJohn, yearMark;
// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log("John est né en " + yearJohn);
console.log("Mark est né en " + yearMark);
// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
console.log("Dans 2 ans nous serons en : " + (now + 2));
console.log("Le double de l'année : " + (now * 2));
console.log("Le dixième de l'année : " + (now / 10));
// Opérateurs logiques
// 4. … (Veuillez préciser votre question ou vos actions ici)

const ageToto = 21;
const ageTiti = 22;

console.log(ageTiti > ageToto);

let isJohnOlder = ageJohn > ageMark;
console.log("John est-il plus âgé que Mark ? " + isJohnOlder);

let sameAge = ageJohn === ageMark;
console.log("Ont-ils le même âge ? " + sameAge);
//etc.. (=== possible aussi)

// Opérateur typeof

console.log(typeof now);
console.log(typeof ageJohn);
console.log(typeof isJohnOlder);
console.log(typeof "Hello");
