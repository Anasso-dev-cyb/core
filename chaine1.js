
const prompt = require('prompt-sync')()
let Fword = prompt ("enter your password")
let Sword = prompt ("confirmed your password")
if (Fword === Sword){
    console.log("your password is saved")
}
else {
console.log("your confirmed password dont match with password")    
}