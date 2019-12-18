/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const w = parseInt(readline()); // the number of cells on the X axis
const h = parseInt(readline()); // the number of cells on the Y axis

let grid = [];

class Node {
    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }
}

let totalNodes = 0;

for (let i = 0; i < h; i++) {
    const string = readline(); // width characters, each either 0 or .
    let line = [];
    for (let j = 0; j < w; j++) {
        let symbol = string.charAt(j);
        
        if(symbol === "0") {
            totalNodes++;    
        }
        
        line.push(new Node(j, i, symbol));
    }
    grid.push(line);
}

let x0 = 0;
let y0 = 0;

let nodes = [];
let activatedNodes = 0;

while(activatedNodes < totalNodes) {
    
    while (grid[x0][y0].state !== "0") {
        if(x0 < w - 1) {
            x0++;    
        } else {
            x0 = 0;
            y0++;
        }
    }
    
    nodes.push(grid[x0][y0]);
    
    while(nodes.length > 0) {
        let current = nodes.pop();
        current.state = "x";
        activatedNodes++;
        
        let result = current.x + " " + current.y;
        
        let bottom = undefined;
        for(let i = current.y + 1; i < h; i++) {
            if(grid[i][current.x].state !== ".") {
                bottom = grid[i][current.x];
                if (grid[i][current.x].state === "0") {
                    nodes.push(bottom);
                }
                break;
            }
        }
        
        let right = undefined;
        for(let i = current.x + 1; i < w; i++) {
            if (grid[current.y][i].state !== ".") {
                right = grid[current.y][i];
                if (grid[current.y][i].state === "0") {
                    nodes.push(right);
                }
                break;
            }
        }
        
        if (right === undefined) {
            result += " -1 -1";
        } else {
            result += " " + right.x + " " + right.y;  
        }
        if (bottom === undefined) {
            result += " -1 -1";
        } else {
            result += " " + bottom.x + " " + bottom.y;    
        }
        
        console.log(result);
    }
}
