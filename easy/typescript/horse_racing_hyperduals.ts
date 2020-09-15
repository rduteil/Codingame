const N: number = parseInt(readline());
let horses: number[][] = new Array<Array<number>>();;

for (let i = 0; i < N; i++) {
    var inputs: string[] = readline().split(' ');
    const V: number = parseInt(inputs[0]);
    const E: number = parseInt(inputs[1]);

    horses[i] = [V, E];
}

horses.sort((a, b) => {
    let difference: number = b[0] + b[1] - a[0] - a[1];
    if (difference > 0) {
        return 1;
    }
    if (difference === 0) {
        return 0;
    }
    return -1;
});

let minDifference = 9999999999;
for (let i: number = 0; i < N - 1; i++) {
    for (let j: number = 0; j < N; j++) {
        if (i === j) {
            continue;
        }
        let difference: number = Math.abs(horses[j][0] - horses[i][0]) + Math.abs(horses[j][1] - horses[i][1]);
        if (difference < minDifference) {
            minDifference = difference;
        }
    }
}

console.log(minDifference);
