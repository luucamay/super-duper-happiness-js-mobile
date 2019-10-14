
let suits = ["Hearts", "Clubs", "Diamonds", "Spiders"],
    values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"]

// DOM variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button')

// Game variables
let gameStarted = false,
    gameOver = false,
    palyerWon = false,
    dealerCards = [],
    playercards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = []

hitButton.style.display = 'none'
stayButton.style.display = 'none'
showStatus()

newGameButton.addEventListener('click', function() {
    gameStarted = true
    gameOver = false
    playerWon = false

    deck = createDeck()
    shuffleDeck(deck)
    dealerCards = [getNextCard(), getNextCard()]
    playerCards = [getNextCard(), getNextCard()]

    newGameButton.style.display = 'none'
    hitButton.style.display = 'inline'
    stayButton.style.display = 'inline'
    showStatus()
})

function createDeck() {
    let deck = []
    for(let i = 0; i < suits.length; i++){
        for(let j = 0; j < values.length; j++){
            let card = {
                suit: suits[i],
                value: values[j]
            }
            deck.push(card)
        }
    }
    return deck    
}

function shuffleDeck(deck){
    for (let i = 0; i < deck.length; i++){
        let swapIdx = Math.trunc(Math.random() * deck.length)
        let tmp = deck[swapIdx]
        deck[swapIdx] = deck[i]
        deck[i] = tmp
    }
}

function getCardString(card){
    return card.value + ' of ' + card.suit
}

function showStatus(){
    if(!gameStarted)
        textArea.innerText = 'Welcome to Blackjack!'
    return
}

function getNextCard(){
    return deck.shift()
}

let deck = createDeck()

for (let i = 0; i < deck.length; i++){
    console.log(deck[i])
}
let playerCards = [ getNextCard(), getNextCard()]
console.log("Welcome to Blackjack!")

console.log("You are dealt: ")
console.log(" " + getCardString(playerCards[0]))
console.log(" " + getCardString(playerCards[1]))
