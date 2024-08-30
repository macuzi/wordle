import React, { useState } from "react";

function GuessInput() {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmitGuess(event) {
    event.preventDefault();
    console.log({ guess: tentativeGuess });
    setTentativeGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
