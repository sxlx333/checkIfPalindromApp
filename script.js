const result = document.querySelector('.miniPara'); // Paragraph element to display result
const button = document.querySelector('.btn'); // Button element
const input = document.querySelector('.inputs'); // Input element

// function countVowel() {
//     let vovelCount = 0;
//     let wordVal = input.value.toLocaleLowerCase() // Get the value from the input element


//      // Loop through the word value to count vowels
//     for (let i = 0; i < wordVal.length;i++) {
//         const letter = wordVal[i];
// // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// // Match vowels using regex
//         if (letter.match(/([a, e, i, o, u])/)) {
//             vovelCount++;
//         }
//     }
//     // Construct and display the result string in the result element
//     result.innerHTML = `${wordVal.toUpperCase()} has ${vovelCount} vowel${vovelCount !== 1 ? 's' : ''}`;
    
// }
// // Add event listener to the button to call countVowel function on click
// button.addEventListener('click', countVowel);

button.addEventListener("click", palindromeChecker);

function palindromeChecker() {



    // const wordVal = input.value;
    // const reverse = wordVal.split('').reverse().join('');
    // console.log(reverse);
    // console.log(wordVal);

    // result.innerHTML = wordVal === reverse ? `${wordVal.toUpperCase()} is a palindrome` : `${wordVal.toUpperCase()} is a not palindrome`;


    const wordVal = input.value.toLowerCase();
    const wordLength = wordVal.length;

    let start = wordVal.substring(0, Math.floor(wordLength/2));
    let end = wordVal.substring(wordLength - Math.floor(wordLength/2));

    let reverse = end.split('').reverse().join('');

    // Compare start and reverse, and show the result
    result.innerHTML = start === reverse ? `${wordVal.toUpperCase()} is a palindrome` : `${wordVal.toUpperCase()} is a not palindrome`;

}