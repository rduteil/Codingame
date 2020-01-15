const number = parseInt(readline());

class Node {
    constructor(value) {
        this.value = value;
        this.leaves = [];
        this.validator = -1;
    }
}

let nodes = [];

for (let i = 0; i < number; i++) {
    let [a, b] = readline().split(' ');
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    
    let aNode = nodes.find(node => {
        return node.value === a;
    });
    
    let bNode = nodes.find(node => {
       return node.value === b; 
    });
    
    if(aNode === undefined) {
        aNode = new Node(a);
        nodes.push(aNode);
    }
    
    if(bNode === undefined) {
        bNode = new Node(b);
        nodes.push(bNode);
    }
    
    aNode.leaves.push(bNode);
    bNode.leaves.push(aNode);
}

const getChild = (depth, node, validator) => {
    node.validator = validator;
    if(node.leaves.length === 0) {
        return depth;    
    } else {
        let localDepth = depth;
        for(let j = 0; j < node.leaves.length; j++) {
            if(node.leaves[j].validator !== validator) {
                let newDepth = getChild(depth + 1, node.leaves[j], validator);
                localDepth = Math.max(newDepth, localDepth);
            }
        }
        return localDepth;
    }
}

let minNights = 99999;
for (let i = 0; i < nodes.length; i++) {
    let nodeNights = getChild(0, nodes[i], i);
    minNights = Math.min(minNights, nodeNights);
}

console.log(minNights);
