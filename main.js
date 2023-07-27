const cards = document.querySelectorAll(".card-face");
// console.log(cards)

const cardFace = ["https://i.imgur.com/sVZIRhr.jpg", "https://i.imgur.com/sVZIRhr.jpg", "https://i.imgur.com/hcqU8K7.jpg", "https://i.imgur.com/hcqU8K7.jpg"]
// console.log(cardFace[1])

let firstCard = null
let secondCard = null
let numCards = 0
let flippedCards = 0

let score = 0

let checkMatch = []

cards.forEach((card) =>
    card.addEventListener("click", flip)
)

function flip(event) {
    // console.log(event)
    if (flippedCards < 2) {

        let currentCard = event.target
        console.log(currentCard)

        console.log(currentCard.id)

        event.target.src = cardFace[currentCard.id]

        checkMatch.push(cardFace[currentCard.id])
        console.log(cardFace[currentCard.id])
        console.log(cardFace[currentCard.id].includes("VZIR"))
        flippedCards++
        console.log(flippedCards)
        console.log(checkMatch)

    }
    if (flippedCards === 2) {
        // console.log("true")
    }


}

// const restart = document.querySelector('.restart');

// restart.forEach(restart) =>
// restart.addEventListener("click", startOver)