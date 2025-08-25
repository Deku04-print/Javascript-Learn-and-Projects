let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
let messageEl=document.getElementById("message-el")
function startGame(){
     sumEl.textContent = "Sum: " + sum

if (sum <= 20) {
    message = "Do you want to draw a new card? "
} else if (sum === 21) {
    message = "You've got Blackjack! "
    hasBlackJack = true
} else {
    message = "You're out of the game! "
    isAlive = false
}
messageEl.textContent=message

}