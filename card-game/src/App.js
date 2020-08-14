import React from "react";
import "./App.css";
import WordCard from "./WordCard";
// import CharacterCard from './CharacterCard';

var word = "";
var text = "";

var rand = Math.floor(Math.random() * 5);

switch (rand) {
  case 0:
    text = 'How to call "ส้มโอ" in English ?';
    word = "Grapefruit";
    break;
  case 1:
    text = 'How to call "มะเฟือง" in English ?';
    word = "starapple";
    break;
  case 2:
    text = 'How to call "Golden dragon" in Thai ?';
    word = "มะยงชิด";
    break;
  case 3:
    text = 'How to call "Indian gooseberry" in Thai ?';
    word = "มะขามป้อม";
    break;
  case 4:
    text = 'How to call "มังคุด" in English ?';
    word = "mangosteen";
    break;
}

function App() {
  return (
    <body>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>{text}</h1>
      <br></br>
      <br></br>
      <div class="cardlayout">
        <WordCard value={word} />
      </div>
    </body>
  );
}

export default App;
