const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const inputRange = document.getElementById('pass-length')

const output = document.getElementById('rangevalue')

let passLength = inputRange.value

let passwordArray = alphabets + numberChars + specialChars

function getRandomIndex(arr) {
    let randomIndex = null
    for(let i = 0; i < arr.length; i++) {
        randomIndex = Math.floor(Math.random() * arr.length)
    }
    return randomIndex
} 

console.log(getRandomIndex(passwordArray))




function updateOutput() {
    output.textContent = passLength
}

updateOutput()


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
