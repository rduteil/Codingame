const N: number = parseInt(readline());
for (let i = 0; i < N; i++) {
    let line: string = readline();
    let drops: number = 0;
    for (let j = 0; j < line.length; j++) {
        if (line.charAt(j) === "f") {
            drops += 1;
            j += 2;
        }
    }
    console.log(drops);
    drops = 0;
}
