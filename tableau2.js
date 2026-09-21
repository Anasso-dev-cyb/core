const prompt = require('prompt-sync')()
let taille =parseInt(prompt ("how many object on table?"))
let tableau = []
for ( i=0 ; i < taille ; i++){
    let resultat = prompt (`enter an object ${i+1}:`);
    tableau.push(resultat);
}
console.log("her is your table");
console.log(tableau);