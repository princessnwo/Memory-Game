const cards = document.querySelectorAll(".card-face");

//WE NEED A WAY TO PROPERLY IDENTIFY EACH CARD.
//RIGHT NOW ONLY UNIQUE VALUE IS JPG NAME
//IT WOULD BE BEST TO PROVIDE UNIQUE IDENTITY WITHIN THE CLASS ATTRIBUTE
//REFACTOR TO ARRAY OF OBJECTS
const cardFace = [
    {
        src: "https://i.imgur.com/sVZIRhr.jpg",
        class: " madara"
    },
    {
        src: "https://i.imgur.com/sVZIRhr.jpg",
        class: " madara"
    },
    {
        src: "https://i.imgur.com/hcqU8K7.jpg",
        class: " pain"
    },
    {
        src: "https://i.imgur.com/hcqU8K7.jpg",
        class: " pain"
    }]

let firstCard = null
let secondCard = null
let numCards = 0
let flippedCards = 0

let score = 0

let checkMatch = []

//1. ADD CLASS NAMES FOR UNIQUE IDENTITY AND ALSO ADD AN EVENT LISTENER WHICH
//LISTENS FOR A CLICK ON EACH CARD
cards.forEach((card, i) => {
    card.className += cardFace[i].class
    card.addEventListener("click", flip)
})

//2.WHEN A CARD IS CLICKED, WE:
function flip(event) {
    //CHECK IF 2 CARDS HAVE BEEN FLIPPED
    if (flippedCards < 2) {

        let currentCard = event.target
        console.log(currentCard)

        console.log(currentCard.id)
        //CONFIRM HOW WE GET THE SRC - THIS IS THE IMAGE THAT DISPLAYS
        console.log(cardFace[currentCard.id].src)
        //THIS IS WHAT ADDS THE IMAGE WHEN WE "FLIP"
        event.target.src = cardFace[currentCard.id].src
        //THIS IS WHERE WE PUSH IN THE CLASS NAMES TO COMPARE WITHIN THE CHECKWIN FUNCTION
        checkMatch.push(cardFace[currentCard.id].class)
        console.log(cardFace[currentCard.id])
        flippedCards++
        console.log(flippedCards)
        console.log(checkMatch)
    }
    //2A. MAKE SURE THAT TWO CARDS HAVE BEEN FLIPPED SO WE CAN COMPARE
    if (flippedCards === 2) {
        // console.log("true")
        //3. INVOKE CHECKWIN
        checkWin()
    }
}

//3 CONT.
function checkWin() {
    //WE WANT TO WORK WITH THE CHECKMATCH ARRAY TO COMPARE
    //CHECKMATCH WILL ALWAYS HAVE TWO INDEXES
    //CHECKMATCH[0] HAS THE VALUE OF MADARA OR WHATEVER IS IN THE FIRST INDEX
    //SAME CONCEPT FOR CHECKMATCH[1]
    //CHECKMATCH[0] === CHECKMATCH[1] -> "Does the first string strictly equal the second string"
    if (checkMatch[0] === checkMatch[1]) {
        //STRING INTERPOLATION
        console.log(`Match: ${checkMatch[0]} and ${checkMatch[1]}`)
        //BEST APPROACH: SOLVE FOR EACH OF THESE ONE AT A TIME. ONCE ONE OF THESE NEW FEATURES IS WORKING, MOVE ON TO THE NEXT

        ////4. NEXT STEP -----> CARDS STAY FACING UP, HOWEVER, FLIPPEDCARDS IS RESET TO 0 SO THAT
        //A PLAYER CAN FLIP MORE CARDS AND
        //CHECKMATCH ARRAY IS RESET BACK TO AN EMPTY ARRAY TO COMPARE CARDS AGAIN
    } else {
        //LOGGING STRING AND VARIABLES AS ADDITIONAL ARGUMENTS
        console.log("Not a match!", checkMatch[0], checkMatch[1])
        //4. NEXT STEP -----> IF THE CARDS ARE NOT A MATCH, THEN THE CARDS SHOULD BE FACE DOWN AGAIN, AND
        function checkForMatch() {
            // Get the two currently flipped cards
            const card1 = flippedCards[0]; 
            const card2 = flippedCards[1];
          
            // If the cards match, add them to the matchedCards array
            if (card1.image === card2.image) {
              matchedCards.push(card1, card2);
              
              // Remove the cards from the flippedCards array
              flippedCards = [];
              
              // Handle any other logic for a match here
              
            // If the cards don't match, they will flip back over to the original state 
            } else {
              setTimeout(function() {
                card1.flipped = false; 
                card2.flipped = false;
                flippedCards = [];
              }, 1000);
            }
          }
        //FLIPPED CARDS SHOULD BE RESET TO 0 AND CHECKMATCH ARRAY IS RESET TO EMPTY
    }
}


// const restart = document.querySelector('.restart');

// restart.forEach(restart) =>
// restart.addEventListener("click", startOver)