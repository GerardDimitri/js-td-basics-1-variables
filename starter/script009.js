/*****************************
 * 009 - Mutation de variable et conversion de type
 */

// 1. Initialisez les variables firstName à "John" et age à 28.

const firstName = 'John';
let age=28;

// Conversion de type

// 2. Affichez la phrase "John a 28 ans" en utilisant les variables et affichez le type de cette expression.
let phrase1 = firstName + ' a'  + age + ' ans';
console.log(phrase1);
console.log(typeof phrase1);

// 3. Déclarez les variables job et isMarried, puis affectez la valeur "professeur" à job et false à isMarried. Ensuite, affichez la phrase "John est un professeur de 28 ans. Est-il marié ? false".
let job = 'professeur';
let isMarried = false;

console.log(firstName + ` est un ` + job + ` de ` + age + ` ans. Est-il marié ? ` + isMarried);
// Variable mutation

// 4. Affectez la valeur "vingt-huit" à la variable age et la valeur "conducteur" à la variable job. Ensuite, affichez la phrase précédente dans une boîte de dialogue.
age = 'vingt-huit';
job = 'conducteur';

alert(firstName + " est un " + job + " de " + age + " ans. Est-il marié ? " + isMarried);
// 5. Affichez une boîte de dialogue demandant "Quel est son nom de famille ?" pour permettre à l'utilisateur d'entrer le nom de famille de John. Stockez ce nom dans une variable lastName, puis affichez "Le nom de famille de John est … (le nom
let lastName = prompt("Quel est son nom de famille ?");
alert("Le nom de famille de " + firstName + " est " + lastName);