let leftContCards = document.querySelectorAll(".cards");
let leftCardsArr = [...leftContCards];

function updateCards() {
    leftCardsArr.forEach(e => {
        e.classList.remove("card1");
        e.classList.remove("card2");
        e.classList.remove("card3");
        e.classList.remove("card4");
        e.classList.remove("card5");
        e.classList.remove("card6");
    });
    leftCardsArr.forEach((card, idx) => {
        card.classList.add(`card${idx+1}`);
    })
}

function animateLeftCards() {
    leftCardsArr.push(leftCardsArr.shift());
    // leftCardsArr.unshift(leftCardsArr.pop());
    updateCards();
}




let rightContCards = document.querySelectorAll(".rcards");
let rightCardsArr = [...rightContCards];

function updateRCards() {
    rightCardsArr.forEach(e => {
        e.classList.remove("rcard1");
        e.classList.remove("rcard2");
        e.classList.remove("rcard3");
        e.classList.remove("rcard4");
        e.classList.remove("rcard5");
        e.classList.remove("rcard6");
    });
    rightCardsArr.forEach((card, idx) => {
        card.classList.add(`rcard${idx+1}`);
    })
}

function animateRightCards() {
    rightCardsArr.push(rightCardsArr.shift());
    // rightCardsArr.unshift(rightCardsArr.pop());
    updateRCards();
}

setInterval(()=>{
    animateLeftCards();
    animateRightCards();
}, 900);