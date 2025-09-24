// Permutation de variables

// Solution classique utilisant une variable temporaire

let number1=5;
let number2=9;
let temp;

temp=number1;
number1=number2;
number2=temp;

// Solution alternative valable uniquement pour des nombres

nombre1 = nombre1 + nombre2; // 5 + 9 = 14
nombre2 = nombre1 - nombre2; // 14 - 9 = 5
nombre1 = nombre1 - nombre2; // 14 - 5 = 9

/*
// Échange de nombre1 et nombre2 sans variable temporaire

*/
[number1,number2] = [number2,number1];

