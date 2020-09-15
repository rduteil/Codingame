const r1: number = parseInt(readline());

function getLength(number: number): number {
    return number.toString().length;
}

function getSumOfDigits(value: number): number {
    let sum: number = 0;

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    return sum;
}

let r0 = r1 - getLength(r1) * 9;
r0 = Math.max(0, r0);

let rivers: number = 0;
for (let i: number = r0; i < r1; i++) {
    if (i + getSumOfDigits(i) === r1) {
        rivers++;
    }
}

console.log(rivers > 0 ? "YES": "NO");
