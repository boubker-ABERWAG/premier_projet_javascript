console.log("Le fichier lecture_clavier.js a bien été chargé");

let nom = prompt("Veuillez saisir votre nom:");
let prenom = prompt('Veuillez saisir votre prénom:');

console.log("Bonjour " + prenom + " " + nom);

let nombre = prompt("Veuillez saisir un nombre");
console.log(nombre);
console.log(nombre + 15);

let vraiNombre = Number(nombre);
let unAutreVraiNombre = parseInt(nombre);

console.log(vraiNombre + 15);
console.log(unAutreVraiNombre + 15);

let nb1S = prompt("Veuillez saisir le nombre 1");
let nb2S = prompt("Veuillez saisir le nombre 2");

let nb1 = parseInt(nb1S);
let nb2 = parseInt(nb2S);
let resultat =nb1 + nb2;
alert("Resultat: " + resultat);
console.log(resultat);

