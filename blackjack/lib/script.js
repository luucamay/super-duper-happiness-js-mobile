
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

function getCardNumericValue(card){
    switch(card.value) {
        case 'Ace':
            return 1
        case 'Two':
            return 2
        case 'Three':
            return 3
        case 'Four':
            return 4
        case 'Five':
            return 5
        case 'Six':
            return 6
        case 'Seven':
            return 7
        case 'Eight':
            return 8
        case 'Nine':
            return 9
        default:
            return  10           
    }
}

function getScore(cardArray){
    let score = 0
    let hasAce = false
     for (let i = 0; i < cardArray.length; i++){
         let card = cardArray[i]
         score += getCardNumericValue(card)
         if (card.value === 'Ace'){
             hasAce = true
         }
     }
     if(hasAce && score + 10 <= 21){
         return score + 10
     }
    return score
}

function updateScores(){
    dealerScore = getScore(dealerCards)
    playerScore = getScore(playerCards)
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = 'Welcome to Blackjack!'
        return
    }

    let dealerCardString = ''
    for (let i=0; i < dealerCards.length; i++){
        dealerCardString += getCardString(dealerCards[i]) + '\n'   
    }
    let playerCardString = ''
    for (let i = 0; i < playerCards.length; i++){
        playerCardString += getCardString(playerCards[i]) + '\n'
    }

    updateScores()

    textArea.innerText =
        'Dealer has:\n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n' +

        'Player has:\n' +
        playerCardString +
        '(score: ' + playerScore + ')\n\n'
    
        if(gameOver){
            if(playerWon){
                textArea.innerText += "YOU WIN!"
            } else {
                textArea.innerText += "DEALER WINS"
            }
            newGameButton.style.display = 'inline'
            hitButton.style.display = 'none'
            stayButton.style.display = 'none'
        }
}

function getNextCard(){
    return deck.shift()
}

for (let i = 0; i < deck.length; i++){
    console.log(deck[i])
}

console.log("Welcome to Blackjack!")

console.log("You are dealt: ")
