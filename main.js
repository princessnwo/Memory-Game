const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    // console.log('I was clicked!');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this; 
    }
    else {
        hasFlippedCard = false;
        secondCard = this;
    }

    console.log({firstCard, secondCard});
    }
   
}

cards.forEach(card => card.addEventListener('click', flipCard));
