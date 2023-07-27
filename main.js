const cards = document.querySelectorAll(".card-face");
// console.log(cards)

const cardFace = ["https://i.imgur.com/sVZIRhr.jpg", "https://i.imgur.com/sVZIRhr.jpg", "https://i.imgur.com/hcqU8K7.jpg", "https://i.imgur.com/hcqU8K7.jpg"]
// console.log(cardFace[1])

var firstCard = null
var secondCard = null
var numCards = 0

var score = 0

cards.forEach((card) =>
    card.addEventListener("click", flip)
)

function flip(event) {
   // console.log(event)
   var currentCard = event.target.firstCard
   console.log(currentCard)

    event.target
   console.log(event.target.id)

   numCards ++
   console.log(numCards)
    event.target.src = cardFace[0]
}



