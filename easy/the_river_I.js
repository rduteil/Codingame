/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const r1 = parseInt(readline());
const r2 = parseInt(readline());

let lowest = Math.min(r1, r2);
let highest = Math.max(r1, r2);

const sumDigits = (int) => {
    let sum = 0;
    while (int) {
        sum += int % 10;
        int = Math.floor(int / 10);
    }
    return sum;
}

while (lowest !== highest) {
    lowest += sumDigits(lowest);
    
    // Swap values
    if (lowest > highest) {
        lowest ^= highest;
        highest ^= lowest;
        lowest ^= highest;
    }
}

console.log(lowest);
