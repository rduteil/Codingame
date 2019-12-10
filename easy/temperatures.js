/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
// Edge case
if (n === 0) {
    console.log(0);    
} else {
    var inputs = readline().split(' ');
    let closest = 5527;
    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
        if (Math.abs(t) < Math.abs(closest)) {
           closest = t; 
        }
        // Negative and positive values
        if (Math.abs(t) === Math.abs(closest) && t > closest) {
           closest = t;   
        }
    }
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    
    console.log(closest);
}
