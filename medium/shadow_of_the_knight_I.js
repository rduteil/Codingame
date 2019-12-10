/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.

var inputs = readline().split(' ');
let x0 = parseInt(inputs[0]);
let y0 = parseInt(inputs[1]);

let xMin = 0;
let xMax = W - 1;

let yMin = 0;
let yMax = H - 1;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    
    if (bombDir.includes("R")) {
        xMin = Math.max(xMin, x0 + 1);
    } else if (bombDir.includes("L")) {
        xMax = Math.min(xMax, x0 - 1);    
    }
    
    if (bombDir.includes("U")) {
        yMax = Math.min(yMax, y0 - 1);    
    } else if (bombDir.includes("D")) {
        yMin = Math.max(yMin, y0 + 1);
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    x0 = Math.floor((xMin + xMax) / 2);
    y0 = Math.floor((yMin + yMax) / 2);
    console.log(x0 + " " + y0);
}
