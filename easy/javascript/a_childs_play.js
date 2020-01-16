let inputs = readline().split(' ');
let w = parseInt(inputs[0]);
let h = parseInt(inputs[1]);
let n = parseInt(readline());

let map = [];

let x = 0;
let y = 0;
let d = 0;

for (let i = 0; i < h; i++) {
    const line = readline();
    map.push([]);
    for (let j = 0; j < w; j++) {
        if (line.charAt(j) === "#") {
            map[i].push(1);
            
        } else {
            map[i].push(0);
            if (line.charAt(j) === "O") {
                x = j;
                y = i;
            }
        }
    }
}

let x0 = x;
let y0 = y;
let n0 = n;
let returnToInit = -1;

while (n > 0) {
    let xi = x;
    let yi = y;
    switch(d) {
        case 0:
            while(map[yi - 1][xi] === 0) {
                yi--;
                n--;
                if(n === 0) {
                    break;    
                }
            }
            d++;
            break;
        case 1:
            while(map[yi][xi + 1] === 0) {
                xi++;
                n--;
                if(n === 0) {
                    break;    
                }
            }
            d++;
            break;
        case 2:
            while(map[yi + 1][xi] === 0) {
                yi++;
                n--;
                if(n === 0) {
                    break;    
                }
            }
            d++;
            break;
        case 3:
            while(map[yi][xi - 1] === 0) {
                xi--;
                n--;
                if(n === 0) {
                    break;    
                }
            }
            d = (d + 1) % 4;
            break;
    }
    x = xi;
    y = yi;
    
    if(x === x0 && y === y0){
        if(returnToInit === -1) {
            n = n0 % (n0 - n);
            returnToInit = 1;
        }
    }
}

console.log(x + " " + y);
