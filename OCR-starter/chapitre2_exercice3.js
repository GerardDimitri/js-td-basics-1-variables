// Permutation de variables

let number1=5;
let number2=9;
let temp;

console.log(`Nombre de base : \nNombre 1 : ${number1}\nNombre 2 : ${number2}`);

// Solution classique utilisant une variable temporaire

temp=number1;
number1=number2;
number2=temp;

console.log(`Permutation temporaire\nNombre 1 : ${number1}\nNombre 2 : ${number2}`);

// Solution alternative valable uniquement pour des nombres

number1=5;
number2=9;

number1 = number1 + number2; // 5 + 9 = 14
number2 = number1 - number2; // 14 - 9 = 5
number1 = number1 - number2; // 14 - 5 = 9

console.log(`Permutation unique nombre\nNombre 1 : ${number1}\nNombre 2 : ${number2}`);

/*
// Échange de nombre1 et nombre2 sans variable temporaire

*/
number1=5;
number2=9;
[number1,number2] = [number2,number1];

console.log(`Permutation sans var temp\nNombre 1 : ${number1}\nNombre 2 : ${number2}`);

