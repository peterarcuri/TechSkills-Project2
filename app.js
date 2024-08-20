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
function insertRandomLetters(str) {
    function randomLetter() {
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];

        if ((i + 1) % 2 === 0) {
            result += randomLetter();
        }
    }
    return result;
};

// function removes every other character in a string and returns original text

function removeEveryOtherChar(str) {
    let result = '';
    let alphabetCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            if (alphabetCount % 2 === 0) {
                result += char;
            }
            alphabetCount++;
        }
        else 
        result += str[i];
    }
    return result;
};


// encryption function takes in a word/message and shifts every letter by specified amount
function encrypt(message, shiftValue) {
    let encryptedMessage = "";
    
    for (let i = 0; i < message.length; i++) {

        let char = message[i].toLowerCase();

        if (alphabet.includes(char)) {
            let result = encryptLetter(message[i], shiftValue);
            encryptedMessage += insertRandomLetters(result);
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

        decryptedMessage += removeEveryOtherChar(encryptedMessage);
        decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
              
    }
    return decryptedMessage;
};

console.log(decrypt("hrealvlcon bardutttupsk mdeoeitv artz tnhhee gzagrtdmemnz", 3));

