/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/


// game loop
while (true) {
    let mountain = 0;
    let max = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline());
        if(mountainH > max){
            mountain = i;
            max = mountainH;
        }
    }
    console.log(mountain);     // The index of the mountain to fire on.

}
