/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.
let result1 = 5 + 3 * 2 / 4;
console.log(`Résultat de l'opération complexe : ` + result1);
// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.
let result2 = (5 + 3) * 2;
console.log(`Résultat avec groupement : ` + result2);
// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.
let x, y;
x = y = (5 + 10) * 2;
console.log(`Valeur de x : ` + x);
console.log(`Valeur de y : ` + y);
// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.
let a = 20;
let b = 15;

console.log(`a > b ? ` + (a > b));   // true
console.log(`a < b ? ` + (a < b));   // false
console.log(`a == b ? ` + (a === b)); // false
console.log(`a != b ? ` + (a !== b)); // true