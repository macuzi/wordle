import React from "react";
import { range } from "/src/utils.js";

import { checkGuess } from "../../game-helpers";

/* 
 > props passed from return statment 
 > "letter" from value[num] / "status" from result[num].status
*/
function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  console.log({ result });

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
