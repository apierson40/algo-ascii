/**
 * Some code to quickly test anais decorator
 */
const fs = require('fs');

// Data which will write in a file.
let data = anaisTextDecorator(63,11,"La peur est la petite mort qui conduit à l'oblitération totale.");

// Write data in 'output.txt' .
fs.writeFile('output.txt', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
});


/**
 * Create anais text decorator
 *
 * @param nbCarac
 * @param nbWords
 * @param sentence
 * @returns {string}
 */
function anaisTextDecorator(nbCarac, nbWords, sentence) {
    // Delete extra spaces
    const cleanSentence = sentence.trim().replace(/\s{2,}/g,' ');

    // Throw error if nbCarac is different from sentence length
    if (nbCarac !== cleanSentence.length) {
        throw new Error("Number of chars specify doesn't match number of chars in the sentence");
    }

    // Split sentence into array of words
    const sentenceWords = cleanSentence.split(' ');

    // Throw error if nbWords is different from sentenceWords length
    if (nbWords !== sentenceWords.length) {
        throw new Error("Number of words specify doesn't match number of words in the sentence");
    }

    // Find longest word length in the sentence
    const longestWordLength = findLongestWordLength(sentenceWords);

    // Get maximum line length between margins
    const maxLineLength = getMaxLineLength(longestWordLength);

    // Create decorator
    let decorator = '';

    // Create first line
    decorator += createFirstAndLastLine(maxLineLength);

    // Create lines with words
    decorator += createLines(sentenceWords, maxLineLength);

    // Create last line
    decorator += createFirstAndLastLine(maxLineLength);

    return decorator;
}

/**
 * Find the longest word length in an array of words.
 *
 * @param arrayWords
 * @returns {number}
 */
function findLongestWordLength(arrayWords) {
    let longestWord = 0;
    for (let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i].length > longestWord){
            longestWord = arrayWords[i].length;
        }
    }
    return longestWord;
}

/**
 * Get maximum line length between margins of the decorator
 * using the longest word length
 *
 * @param longestWordLength
 * @returns {*}
 */
function getMaxLineLength(longestWordLength) {
    //lineLength is longestWord
    let maxLineLength = longestWordLength;

    // if longest word is even, we need to add one extra character
    // for first and last line finish with `*` and not with a space
    if (isOdd(longestWordLength)) {
        maxLineLength = maxLineLength + 1;
    }
    return maxLineLength;
}

/**
 * Create first or last line of the text decorator.
 * This function takes the maximum line length between margins.
 *
 * @param maxLineLength
 * @returns {string}
 */
function createFirstAndLastLine(maxLineLength) {
    let line = '';
    let i = 0;
    // we need to divide maxLineLength by 2 because there is two characters : `*` and space
    while (i < maxLineLength / 2) {
        line += '* ';
        i++;
    }

    // adding margins and if maxLine is odd we need to add an extra ` *`
    let firstOrLastLine = `* ${line}*`;
    if (isOdd(maxLineLength)) {
        firstOrLastLine += ' *';
    }
    return firstOrLastLine;
}

/**
 * Test if a number is odd or not
 *
 * @param number
 * @returns {boolean}
 */
function isOdd(number) {
    return number % 2 === 0;
}

/**
 * Create each line for the decorator.
 * This function takes an array of words to add
 * and the maximum length of line between margins.
 *
 * @param sentenceWords
 * @param maxLength
 * @returns {string}
 */
function createLines(sentenceWords, maxLength) {
    let decorator = '';
    let line = '';
    for (let word of sentenceWords) {

        // Calculate new length if we add a new word
        let newLength = line.length + word.length;
        if (line.length !== 0) {
            // if it's not a new line we need to add a space between words
            newLength = newLength + 1;
        }

        // if new length > max length than we add line to decorator with margin and extra spaces and start a new one
        if (newLength > maxLength) {
            decorator += createLine(line, maxLength);
            line = '';
            newLength = line.length + word.length;
        }

        // if new length <= max length than we add the word to the line
        if (newLength <= maxLength) {
            if (line.length !== 0) {
                // if it's not a new line we need to add a space between words
                line += ' ';
            }
            line += `${word}`;
        }
    }

    // adding last line with words
    decorator += createLine(line, maxLength);
    decorator += '\r\n';

    return decorator;
}

/**
 * Create new line for decorator.
 * This function takes the line containing only words and spaces
 * and the maximum length of the line between margins.
 *
 * @param line
 * @param maxLength
 * @returns {string}
 */
function createLine(line, maxLength) {
    // adding extra spaces to match the maximum length of the line
    const extraSpaces = ' '.repeat(maxLength - line.length);
    return `\r\n* ${line}${extraSpaces} *`;
}
