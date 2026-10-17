let firstCard = 10
let secondCard = 11
let sum  = firstCard+secondCard
let message = ""
let hasBlackJack = false
let isAlive = true

const cardsEl = document.getElementById('cards-el')
const sumEl = document.getElementById('sum-el')
const messageEl = document.getElementById('message-el')

function startGame(){
    // cardsEl.textContent = 'Cards: '+firstCard+' '+secondCard
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = 'Sum: '+sum

    if(sum <= 20){
        message = 'Do you want to draw a new card?'
    }
    else if(sum === 21){
        message = "You've got black jack!"
        hasBlackJack = true
    }
    else{
        message = "you're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}


