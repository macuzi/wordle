import React from "react";
import Guess from "../Guess";

import { range } from "/src/utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants.js";

function GuessResults({ guesses }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
