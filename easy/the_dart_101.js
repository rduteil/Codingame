/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let players = [];
let rounds = [];

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    players.push(readline());
}

for (let i = 0; i < N; i++) {
    let shoots = readline().split(" ");
    
    let score = 0;
    let lastScore = 0;
    let round = 0;
    let index = 0;
    let successiveFails = 0;
    
    shoots.forEach(shoot => {
        index++;
        if (shoot === "X") {
            successiveFails++;
            switch(successiveFails) {
                case 1: {
                    score -= 20;
                    score = Math.max(0, score);
                    break;
                }
                case 2: {
                    score -= 30;   
                    score = Math.max(0, score);
                    break;
                }
                case 3: {
                    score = 0;
                    break;
                }
            }
        } else {
            successiveFails = 0;
            
            if (shoot.includes("*")) {
                let values = shoot.split("*");
                shoot = parseInt(values[0]) * parseInt(values[1]);
            }
            
            score += parseInt(shoot);
            if (score > 101){
                index = 0;
                round++;
                score = lastScore;
            } else if (score === 101) {
                index = 0;
                round++;
                rounds.push(round);
            }
        } 
        
        if (index === 3) {
            successiveFails = 0;
            lastScore = score;
            index = 0;
            round++;
        }
    });
    
    // Failed to score 101
    if(score !== 101) {
        rounds.push(999);    
    }
}

// Get the best player
let minIndex = 0;
for(let i = 0; i < rounds.length; i++) {
    if(rounds[i] < rounds[minIndex]) {
        minIndex = i;    
    }
}
console.log(players[minIndex]);
