// Function to check if a word is a palindrome
function checkPalindrome() {
    let word = document.getElementById('wordInput').value.trim(); // Get user input and trim whitespace
    let resultElement = document.getElementById('result'); // Get the element to display the result

    // Convert the word to lowercase and remove non-alphabetical characters
    let cleanedWord = word.toLowerCase().replace(/[^a-z]/g, "");

    // Reverse the cleaned word
    let reversedWord = cleanedWord.split('').reverse().join('');

    // Check if the word is a palindrome
    if (cleanedWord === reversedWord) {
        resultElement.textContent = `"${word}" is a palindrome!`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `"${word}" is not a palindrome.`;
        resultElement.style.color = "red";
    }
}

// Attach the palindrome check function to the button
document.getElementById('checkButton').addEventListener('click', checkPalindrome);
