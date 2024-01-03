let passwordEl = document.getElementById("password-el")
let generateBtn = document.getElementById("generate-btn")

let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz" 
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let symbols = "_-#@{}[]!$()?/\<>:="
let characterCategories = [lowerCaseLetters, upperCaseLetters, numbers, symbols]

function getRandom(sequence) {
    let randomIndex = Math.floor(Math.random() * sequence.length)
    return sequence[randomIndex]
}

generateBtn.addEventListener("click", function () {
    let password = ""
    for (let i = 0; i < 24; i++){
        let randomCategory = getRandom(characterCategories)
        let randomCharacter = getRandom(randomCategory)
        password += randomCharacter
    }
    passwordEl.textContent = password
})

// To do
// Add event listener to password element to copy text to clipboard when clicked
// Add a toast notification too when copied to clipboard