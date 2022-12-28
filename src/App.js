import React, { useState } from "react";
import './App.css';

function WordGenerator() {
  // Use the useState hook to create a state variable for the generated word
  const [generatedWord, setGeneratedWord] = useState("");

  // Define an array of words to choose from
  const words = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "watermelon",
  ];

  // Define a function that generates a random word
  function generateWord() {
    // Get a random index in the words array
    const index = Math.floor(Math.random() * words.length);

    // Set the generatedWord state variable to the word at the chosen index
    setGeneratedWord(words[index]);
  }

  return (
    <div className="word-generator">
      <h1>Word Generator</h1>
      <button onClick={generateWord}>Generate Word</button>
      <p>{generatedWord}</p>
    </div>
  );
}

export default WordGenerator;
