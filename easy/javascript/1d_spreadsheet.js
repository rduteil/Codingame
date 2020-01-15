const number = parseInt(readline());
let cells = [];
let values = [];

for (let i = 0; i < number; i++) {
    let [operator, arg1, arg2] = readline().split(' ');
    cells[i] = {operator, arg1, arg2};
}

// Recursive method that computes the value of a given cell
// Also computes all the references required
const calculateValue = (i) => {
    if(values[i] === undefined) {
        
        let operation = cells[i];
        let value = undefined;
        
        let isRef1 = operation.arg1.startsWith("$");
        let isRef2 = operation.arg2.startsWith("$");
        
        let int1 = isRef1 ?
            calculateValue(parseInt(operation.arg1.substr(1), 10)):
            parseInt(operation.arg1, 10);
        let int2 = isRef2 ?
            calculateValue(parseInt(operation.arg2.substr(1), 10)):
            parseInt(operation.arg2, 10);
            
        switch(operation.operator) {
            case "VALUE": {
                value = int1;
                break;    
            }
            case "ADD": {
                value = int1 + int2;
                break;   
            }
            case "SUB": {
                value = int1 - int2;
                break;
            }
            case "MULT": {
                value = int1 * int2;
                break;   
            }
        }
        if(value === -0) {
            value = 0;
        }
        values[i] = value;
        return value;
    } else {
        return values[i];
    }
}

for (let i = 0; i < number; i++) {
    console.log(calculateValue(i));
}
