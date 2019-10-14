
let suits = ["Hearts", "Clubs", "Diamonds", "Spiders"]
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"]

function createDeck() {
    let deck = []
    for(let i = 0; i < suits.length; i++){
        for(let j = 0; j < values.length; j++){
            deck.push(values[j] + " of " + suits[i])
        }
    }
    return deck    
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
console.log(" " + playerCards[0])
console.log(" " + playerCards[1])
