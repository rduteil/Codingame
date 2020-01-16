const R = parseInt(readline());
const V = parseInt(readline());
let robbers = new Array(R).fill(0);

for (let i = 0; i < V; i++) {
    var inputs = readline().split(' ');
    const C = parseInt(inputs[0]);
    const N = parseInt(inputs[1]);
    robbers[robbers.indexOf(Math.min(...robbers))] += Math.pow(5, (C - N)) * Math.pow(10, N);
}

console.log(Math.max(...robbers));
