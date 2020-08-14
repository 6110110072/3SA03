import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _, { attempt } from "lodash";

var temp = 0;
var answer = "(When you try 3 attempted)";
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase();
  let chars = _.shuffle(Array.from(word));
  return {
    word,
    chars,
    attempt: 0,
    guess: "",
    completed: false,
  };
};

export default function WordCard(props) {
  const [state, setState] = useState(prepareStateFromWord(props.value));

  const activationHandler = (c) => {
    console.log(`${c} has been activated.`);
    let guess = state.guess + c;
    setState({ ...state, guess });

    if (guess.length == state.word.length) {
      if (guess == state.word) {
        // console.log("yeah!");
        alertWin();
        setState({ ...state, guess: "", completed: true });
        window.location.reload(false);
      } else {
        // console.log("reset");
        alert("try agian!");

        setState({ ...state, guess: "", attempt: state.attempt+1});
      }
    }

  };

  return (
    <div>


      {state.chars.map((c, i) => (
        <CharacterCard
          value={c}
          key={i}
          activationHandler={activationHandler}
          attempt={state.attempt}
        />
      ))}
    </div>
  );
}

function alertWin() {
  var x = Math.floor(Math.random() * 4);
  if (x == 0) {
    alert("AWESOME !!");
  }
  if (x == 1) {
    alert("YOU ARE KING OF FRUIT !");
  }
  if (x == 2) {
    alert("EASY LIKE A BANANA");
  }
  if (x == 3) {
    alert("Well done !");
  }
}
