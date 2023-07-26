const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.('flip');
    console.log('I was clicked!');
   
}

cards.forEach(card => card.addEventListener('click', flipCard));

const gridContainer = document.querySelector(".grid-container");
let .memory-card = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

function shuffleCards() {
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
        <div class="front">
        <img class=front-image" src=${card.image} />
        <div class="back"></div>
    `;

    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
}
}
function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

this.classList.add("flipped");

if (!firstCard) {
    firstCard = this;
    return;
}
secondCard = this;
score++;
document.querySelector(".score").textContent = score;
lockBoard = true;
}

checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch > disableCards() : unflipCards();
}
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart() {
    resetBoard();
    shuffleCards();
    score = 0;
document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    generateCards();
}