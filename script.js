// decision if else
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Exemple d'utilisation
const year = parseInt(prompt("Entrez une année :"));
if (isLeapYear(year)) {
  console.log(`${year} est une année bissextile.`);
} else {
  console.log(`${year} n'est pas une année bissextile.`);
}

// Tarification des Billets :
function ticketPrice(age) {
  if (age <= 12) {
    return 10;
  } else if (age >= 13 && age <= 17) {
    return 15;
  } else {
    return 20;
  }
}

// Exemple d'utilisation
const age = parseInt(prompt("Entrez votre âge :"));
const price = ticketPrice(age);
console.log(`Le prix du billet est de $${price}.`);

// Récursion
// Séquence de Fibonacci :

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Exemple d'utilisation
const n = parseInt(
  prompt("Entrez la position dans la séquence de Fibonacci :")
);
console.log(`Le ${n}-ième nombre de Fibonacci est ${fibonacci(n)}.`);

// Vérificateur de Palindrome :
function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Nettoyer la chaîne
  function checkPalindrome(start, end) {
    if (start >= end) {
      return true;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    return checkPalindrome(start + 1, end - 1);
  }
  return checkPalindrome(0, s.length - 1);
}

// Exemple d'utilisation
const str = prompt("Entrez une chaîne de caractères :");
if (isPalindrome(str)) {
  console.log("La chaîne est un palindrome.");
} else {
  console.log("La chaîne n'est pas un palindrome.");
}
