let operation: string = readline();
let pseudoRandomNumber: number = parseInt(readline());

let rotors: string[] = [];
for (let i: number = 0; i < 3; i++) {
    rotors.push(readline());
}
let message: string = readline();

switch (operation) {
    case "ENCODE": {
        let encoded: string = "";
        for (let i: number = 0; i < message.length; i++) {
            let alpha: number = (message.charAt(i).charCodeAt(0) + (pseudoRandomNumber + i - 65))%26;
            alpha = rotors[0][alpha].charCodeAt(0) - 65;
            alpha = rotors[1][alpha].charCodeAt(0) - 65;
            encoded += rotors[2][alpha];
        }
        console.log(encoded);
        break;
    }
    case "DECODE": {
        let decoded: string = "";
        for (let i: number = 0; i < message.length; i++) {
            let alpha: number = rotors[2].indexOf(message.charAt(i));
            alpha = rotors[1].indexOf(String.fromCharCode(alpha + 65));
            alpha = rotors[0].indexOf(String.fromCharCode(alpha + 65));
            alpha = alpha - pseudoRandomNumber - i;
            while (alpha < 0) {
                alpha += 26;
            }
            decoded += String.fromCharCode(alpha + 65);
        }
        console.log(decoded);
        break;
    }
}
