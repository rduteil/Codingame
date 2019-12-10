/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let n = parseInt(readline());

// Edge case
if (n === 0) {
    console.log("0");    
}
else {
    let negative = n < 0;
    
    n = Math.abs(n);
    
    let result = "";
    
    while (n > 0) {
        let remainder = n % 3;
        n = Math.floor(n / 3);
        switch (remainder) {
            case 0: {
                result = "0" + result;
                break;
            }
            case 1: {
                if (!negative) {
                    result = "1" + result;
                } else {
                    result = "T" + result;
                }
                break;
            }
            case 2: {
                n++;
                if (!negative) {
                    result = "T" + result;
                } else {
                    result = "1" + result;
                }
                break;
            }
        }
    }
    console.log(result);
}
