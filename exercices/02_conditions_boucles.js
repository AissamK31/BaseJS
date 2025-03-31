/*
 * Exercice 2 : Conditions et Boucles
 *
 * Objectif : Pratiquer les structures conditionnelles et les boucles.
 *
 * Instructions :
 *
 * Partie 1 : Nombres pairs et impairs
 * 1. Écrivez une fonction 'estPair' qui prend un nombre en paramètre
 *    et retourne true s'il est pair, false sinon
 * 2. Utilisez cette fonction pour afficher si les nombres 7, 12 et 20 sont pairs ou impairs
 *
 * Partie 2 : Table de multiplication
 * 1. Écrivez une fonction 'tableMultiplication' qui prend un nombre en paramètre
 *    et affiche sa table de multiplication de 1 à 10
 * 2. Appelez cette fonction avec le nombre 7
 *
 * Partie 3 : FizzBuzz simplifié
 * 1. Écrivez une fonction 'fizzBuzz' qui prend un nombre en paramètre et:
 *    - Retourne "Fizz" si le nombre est divisible par 3
 *    - Retourne "Buzz" si le nombre est divisible par 5
 *    - Retourne "FizzBuzz" si le nombre est divisible par 3 et par 5
 *    - Sinon, retourne le nombre lui-même
 * 2. Testez cette fonction avec les nombres 9, 10, 15 et 17
 *
 * Structure recommandée :
 * 1. Définissez les trois fonctions demandées
 * 2. Appelez-les avec les valeurs de test indiquées
 * 3. Utilisez console.log() pour afficher les résultats
 */

// Votre code commence ici
for (let i = 0; i <= 100; i++) {
  let nombre = i;
  function estPair(nombre) {
    return nombre % 2 === 0;
  }

  function tableMultiplication(nombre) {
    for (let i = 1; i <= 10; i++) {
      return nombre * i;
    }
  }

  function fizzBuzz(nombre) {
    if (nombre % 3 === 0) {
      return "Fizz";
    } else if (nombre % 5 === 0) {
      return "buzz";
    } else if (nombre % 3 === 0 && nombre % 5 === 0) {
      return "FizzBuzz";
    } else {
      return nombre;
    }
  }
}

// Tests pour estPair()
console.log("7 est pair ? " + estPair(7));
console.log("12 est pair ? " + estPair(12));
console.log("20 est pair ? " + estPair(20));

// Test pour tableMultiplication()
console.log("\nTable de multiplication de 7 : " + tableMultiplication(7));
/* appel à tableMultiplication avec 7 */

// Tests pour fizzBuzz()
console.log("\nFizzBuzz pour 9 : " + fizzBuzz(9));
console.log("FizzBuzz pour 10 : " + fizzBuzz(10));
console.log("FizzBuzz pour 15 : " + fizzBuzz(15));
console.log("FizzBuzz pour 17 : " + fizzBuzz(17));
