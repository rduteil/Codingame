let inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const N = parseInt(readline());

let inputs = readline().split(' ');
let x0 = parseInt(inputs[0]);
let y0 = parseInt(inputs[1]);

let xMin = 0;
let xMax = W - 1;

let yMin = 0;
let yMax = H - 1;

while (true) {
    // The direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    const bombDir = readline();
    
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
    
    x0 = Math.floor((xMin + xMax) / 2);
    y0 = Math.floor((yMin + yMax) / 2);
    console.log(x0 + " " + y0);
}
