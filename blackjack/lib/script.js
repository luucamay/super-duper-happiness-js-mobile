
let suits = ["Hearts", "Clubs", "Diamonds", "Spiders"]
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"]

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

function getCardString(card){
    return card.value + ' of ' + card.suit
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
