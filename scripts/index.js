const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*"];

// removedFromArray = ["(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const passEl1 = document.getElementById("passone-el")
const passEl2 = document.getElementById("passtwo-el")
const passEl3 = document.getElementById("passthree-el")
const generateBtn = document.getElementById("generate-el")

let passLength = 15

generateBtn.addEventListener("click", function() {
    passEl1.textContent = getPass()
    passEl2.textContent = getPass()
    passEl3.textContent = getPass()
})

function getPass() {
    let password = ""
    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor (Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}


function copyPassOne() {
    let valueOne = document.getElementById("passone-el").textContent
    navigator.clipboard.writeText(valueOne);
    alert( valueOne + ` copied to clipboard`);
}

function copyPassTwo() {
    let valueTwo = document.getElementById("passtwo-el").textContent
    navigator.clipboard.writeText(valueTwo);
    alert( valueTwo + ` copied to clipboard`);
}

function copyPassThree() {
    let valueThree = document.getElementById("passthree-el").textContent
    navigator.clipboard.writeText(valueThree);
    alert( valueThree + ` copied to clipboard`);
}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
