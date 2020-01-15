let opBowls = readline().split(' ');
let myBowls = readline().split(' ');

let playedBowl = parseInt(readline());

let grains = parseInt(myBowls[playedBowl], 10);
myBowls[playedBowl] = 0;

let replay = false;

while (grains > 0) {
    for (let i = playedBowl + 1; i < 7; i++) {
         myBowls[i] = parseInt(myBowls[i]) + 1;
         grains -= 1;
         if (grains === 0) {
            replay = i === 6;
            break;   
         }
    }
    if (grains === 0) {
        break;    
    }
    for (let i = 0; i < 6; i++) {
        opBowls[i] = parseInt(opBowls[i]) + 1;
        grains -= 1;
        if (grains === 0) {
            break;    
        }
    }
    playedBowl = -1;
}

let opString = "";
let myString = "";
for (let i = 0; i < 6; i++) {
    opString += opBowls[i] + " ";
    myString += myBowls[i] + " ";
}
opString += "[" + opBowls[6] + "]";
myString += "[" + myBowls[6] + "]";

console.log(opString);
console.log(myString);

if (replay) {
   console.log("REPLAY"); 
}
