const upperCase = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]

const lowerCase = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
]


const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specialChars = [
        "~","`","!","@","#","$","%","^","&",
        "*","_","-","+","=",",",".","?","/"
    ]

const genBtn = document.getElementById('gen-btn')
const passEls = document.querySelectorAll('.password')
let passLength = 8
const numberOpt = document.getElementById('numbers-chars')
const specialOpt = document.getElementById('special-chars')
let chars = []

chars = filterChars()

function generatePassword() {
    let password = ''
    updatedPassLength()
    filterChars()
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor( Math.random() * chars.length)
        password += chars[randomIndex]
    }
    return password
}

function updatedPassLength() {
    passLength = document.getElementById('range').value
    let output = document.getElementById('rangevalue')
    output.textContent = passLength
}

updatedPassLength()

function filterChars() {
    chars = [...upperCase, ...lowerCase]
    
   if(numberOpt.checked && specialOpt.checked) {
       chars = [...chars, ...numberChars, ...specialChars]
   } else if(specialOpt.checked) {
       chars = [...chars, ...specialChars]
   } else if(numberOpt.checked) {
       chars = [...chars, ...numberChars]
   } else {
       return chars
   }
}

function generatePasswords() {
    let passwords = []
    for (let i = 0; i < passEls.length; i++) {
        const password = generatePassword()
        passwords.push(password)
    }
    
    for (let i = 0; i < passwords.length; i++) {
        passEls[i].textContent = passwords[i]
    }
}

genBtn.addEventListener('click', generatePasswords)

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

let copyBtn1 = document.getElementById('copy1')
let copyBtn2 = document.getElementById('copy2')
let copyBtn3 = document.getElementById('copy3')
let copyBtn4 = document.getElementById('copy4')

copyBtn1.addEventListener('click', function() {
	let copyText = document.getElementById('pass1').textContent
    
	navigator.clipboard.writeText(copyText)

	alert('Copied the password: ' + copyText)
})

copyBtn2.addEventListener('click', function() {
	let copyText = document.getElementById('pass2').textContent
    
	navigator.clipboard.writeText(copyText)

	alert('Copied the password: ' + copyText)
})

copyBtn3.addEventListener('click', function() {
	let copyText = document.getElementById('pass3').textContent
    
	navigator.clipboard.writeText(copyText)

	alert('Copied the password: ' + copyText)
})

copyBtn4.addEventListener('click', function() {
	let copyText = document.getElementById('pass4').textContent
    
	navigator.clipboard.writeText(copyText)

	alert('Copied the password: ' + copyText)
})