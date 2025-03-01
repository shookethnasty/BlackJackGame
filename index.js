let firstCard = 10
let secondCard = 6
let cards = [firstCard, secondCard]
// let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ""

// storing my cards in the cards id 
let cardsEl = document.getElementById("cards-el")
// storing my sum of the cards
let sumEl = document.getElementById("sum-el")

let messageEl = document.getElementById("message-el")
// let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]


function startGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
        // sum += cards[0] + cards[1]
        sumEl.textContent = "Sum: " + sum

    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    // console.log(message)
    messageEl.textContent = message
}

function newCard(){
    let newCard = 6
    sum += newCard
    sumEl.textContent = "Sum: " + sum
}
