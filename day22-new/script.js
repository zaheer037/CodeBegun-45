// Example: String Manipulation

// 1. Using slice, substring, and replace
let text = "JavaScript is amazing!";
console.log("Original Text:", text);

// Extracting a part of the string
console.log("Slice (0, 10):", text.slice(0, 10));
console.log("Substring (0, 10):", text.substring(0, 10));

// Replacing a word
let newText = text.replace("amazing", "powerful");
console.log("Replaced Text:", newText);

// Changing case
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// 2. Searching in strings
console.log("Index of 'is':", text.indexOf("is"));
console.log("Includes 'amazing':", text.includes("amazing"));

// 3. Using template literals
let name = "zaheer";
let age = 20;
console.log(`My name is ${name}, and I am ${age} years old.`);

// Example: Array and String Conversions

// 1. Splitting and joining strings
let sentence = "Learning JavaScript is fun!";
let words = sentence.split(" "); // Split by spaces
console.log("Words Array:", words);

let joinedSentence = words.join("-"); // Join with hyphens
console.log("Joined Sentence:", joinedSentence);

// Example: Real-world Functions

// 1. Count word frequency in a sentence
function countWordFrequency(sentence) {
    let words = sentence.toLowerCase().split(" ");
    let frequency = {};
    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });
    return frequency;
}

console.log("Word Frequency:", countWordFrequency("JavaScript is fun and learning JavaScript is rewarding"));

// 2. Reverse words in a sentence
function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log("Reversed Words:", reverseWords("JavaScript is amazing!"));

// Debugging chained methods
let debugExample = sentence.toUpperCase().replace("FUN", "EXCITING").split(" ");
console.log("Debug Example Result:", debugExample);
