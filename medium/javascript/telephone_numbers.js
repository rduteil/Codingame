/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 class Node {
    constructor (value) {
        this.value = value;    
        this.nodes = [];
    }
}

let root = new Node("R");

const N = parseInt(readline());

let totalNodes = 0;

for (let i = 0; i < N; i++) {
    let phone = readline();
    let current = root;
    
    for (let j = 0; j < phone.length; j++) {
         let number = phone.charAt(j);
         
         let next = current.nodes.find(node => {
             return node.value === number;
         });
         
         if(next === undefined) {
            next = new Node(number);
            current.nodes.push(next);
            totalNodes++;
         }
         
        current = next; 
    }
}

console.log(totalNodes);
