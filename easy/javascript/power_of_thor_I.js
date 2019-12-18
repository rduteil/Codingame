/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let thorX = parseInt(inputs[2]); // Thor's starting X position
let thorY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline());
    let move = "";
    
    if(thorY > lightY) {
        move += "N"
        thorY--;
    } else if (thorY < lightY) {
        move += "S";
        thorY++;
    }
    
    if(thorX < lightX) {
        move += "E";
        thorX++;
    } else if (thorX > lightX) {
        move += "W";
        thorX--;
    }
    
    console.log(move);
}
