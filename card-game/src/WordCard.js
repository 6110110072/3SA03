import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _, { attempt } from "lodash";

var temp = 0;
var answer = "(When you try 3 attempted)";
var character = "";

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

  character = state.guess;

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

        state.attempt += 1;
        setState({ ...state, guess: "", attempt: state.attempt });
      }
    }
    temp = state.attempt;

    if (temp >= 3) answer = props.value;
  };

  return (
    <div>
      <div class="AttemptAndAnswer">
        You Answer : {character}
        <br></br>
        <br></br>
        <br></br>
        Attempt : {temp}
        <br></br>
        <br></br>
        <br></br>
        Answer : {answer}
        <br></br>
        <br></br>
        <br></br>
      </div>

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
  var x = Math.floor(Math.random() * 3);
  if (x == 0) {
    alert("AWESOME !!");
  }
  if (x == 1) {
    alert("YOU ARE KING OF FRUIT !");
  }
  if (x == 2) {
    alert("EASY LIKE A BANANA");
  }
}
