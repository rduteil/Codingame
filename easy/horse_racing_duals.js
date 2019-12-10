/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());

let horses = [];

let d = 99999;

const sortInt = (a, b) => {
  return a - b;
}

for (let i = 0; i < N; i++) {
    horses.push(parseInt(readline()));
}

horses.sort(sortInt);

for (let i = 0; i < N - 1; i++) {
    if (horses[i + 1] - horses[i] < d) {
        d = horses[i + 1] - horses[i];
    }
}
// Write an action using console.log()
// To debug: console.error('Debug messages...');
console.log(d);
