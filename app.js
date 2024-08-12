// string containing all the letters of the alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function takes a given letter and positively shifts to any number given
function encryptLetter(letter, shiftValue) {

    const index = alphabet.indexOf(letter.toLowerCase());    
    const newIndex = (index + shiftValue) % alphabet.length;
    return alphabet[newIndex];
};

// same as encryptLetter function but shifts in reverse
function decryptLetter(letter, shiftValue) {

    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shiftValue + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}

// function inserts a random letter every 2 within the index
function randomLetter2(encryptMessage) {
    let n = 2;
    let insertChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    let chars = [...encryptMessage];
    chars.splice(n, 0, insertChar);
    const newLetter = chars.join('');

    return newLetter;
}

// function removes every other character in a string and returns original text
function removeEveryOtherChar(str) {
    let result = "";
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Check if the character is a valid letter (i.e., part of the alphabet)
        if (char.toLowerCase() !== char.toUpperCase()) {
            // Add the character to the result if the counter is even
            if (counter % 2 === 0) {
                result += char;
            }
            // Increment the counter only for valid characters
            counter++;
        } else {
            // Always include spaces and non-alphabet characters in the result
            result += char;
        }
    }
    return result;
}

// encryption function takes in a word/message and shifts every letter by specified amount
function encrypt(message, shiftValue) {
    let encryptedMessage = "";
    
    for (let i = 0; i < message.length; i++) {

        let char = message[i].toLowerCase();

        if (alphabet.includes(char)) {
            let result = encryptLetter(message[i], shiftValue);
            encryptedMessage += randomLetter2(result);
        }
        else {
            encryptedMessage += char;
        }
    }
    return encryptedMessage;
};

console.log(encrypt("Hello Brutus Meet at the garden", 3));


// decrypt function takes in encrypted message, reverses the shift value and removes every other random letter using the removeEveryOtherChar function
function decrypt(encryptedMessage, shiftValue) {

    let decryptedMessage = ""; 
      

    for (let i = 0; i < encryptedMessage.length; i++) {        
        
        decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
        decryptedMessage += removeEveryOtherChar(encryptedMessage);
        
    }
    return decryptedMessage;
};

console.log(decrypt("hrealvlcon bardutttupsk mdeoeitv artz tnhhee gzagrtdmemnz", 3));


