/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of cards for player 1

const getCardValue = (card) => {
  card = card.slice(0, -1).replace("J", "11").replace("Q", "12").replace("K", "13").replace("A", "14");
  return parseInt(card);
};

let firstDeck = [];
for (let i = 0; i < n; i++) {
    firstDeck.push(getCardValue(readline())); // the n cards of player 1
}
const m = parseInt(readline()); // the number of cards for player 2

let secondDeck = [];
for (let i = 0; i < m; i++) {
    secondDeck.push(getCardValue(readline())); // the m cards of player 2
}

let turns = 0;

while (firstDeck.length > 0 && secondDeck.length > 0) {

    let firstCard = firstDeck.shift();
    let secondCard = secondDeck.shift();
    
    let firstPile = [firstCard];
    let secondPile = [secondCard];
    
    while(firstCard === secondCard) {
        for(let i = 0; i < 3; i++) {
            firstPile.push(firstDeck.shift());
            secondPile.push(secondDeck.shift());
        }
        
        if(firstDeck.length === 0 || secondDeck.length === 0) {
            console.log("PAT");
            throw "";
        }
        
        firstCard = firstDeck.shift();
        secondCard = secondDeck.shift();
        
        firstPile.push(firstCard);
        secondPile.push(secondCard);
    }
    
    if(firstCard > secondCard) {
        while(firstPile.length > 0) {
            firstDeck.push(firstPile.shift());
        }
        while(secondPile.length >0) {
            firstDeck.push(secondPile.shift());
        }
    } else {
        while(firstPile.length > 0) {
            secondDeck.push(firstPile.shift());
        }
        while (secondPile.length > 0) {
            secondDeck.push(secondPile.shift());
        }
    }
    turns++;
}

let winner = firstDeck.length === 0 ? 2 : 1;
console.log(winner + " " + turns);
