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
        passEls[i].innerText = passwords[i]
    }
}

genBtn.addEventListener('click', generatePasswords)

const checkbox = document.getElementById("checkbox")

checkbox.checked = false

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})



function sendPrompt(msg) {
  const prompt = document.createElement('p')
  prompt.classList.add('notification')
  prompt.innerText = msg
  document.getElementById('prompt').appendChild(prompt)
  
  setTimeout(() => {
    prompt.remove()
  }, 1500)
}

const copyBtns = document.querySelectorAll('.copy-btn')


copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const passEl = document.getElementById(`${btn.dataset.copy}`)
        if(passEl.textContent !== '') {
            let textToCopy = passEl.textContent

            navigator.clipboard.writeText(textToCopy)
            sendPrompt(`${textToCopy} copied ✔️`)
        }
    })
})