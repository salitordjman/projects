import "./App.css";

import { useState, useEffect } from "react";
import ColorCard from "./components/ColorCard";
import timeout from "./components/utils";

function App() {
  const [isOn, setIsOn] = useState(false);

  const colorList = ["green", "red", "yellow", "blue", "purple", "orange"];

  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");

  function startHandle() {
    setIsOn(true);
  }
  function randomColor() {
    return colorList[Math.floor(Math.random() * 6)];
  }

  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true });
    } else {
      setPlay(initPlay);
    }
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      const copyColors = [...play.colors];
      let newColor = randomColor();
      if (copyColors[copyColors.length - 1] === newColor) {
        newColor = randomColor();
      }
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors });
    }
  }, [isOn, play.isDisplay]);

  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length]);

  async function displayColors() {
    await timeout(500);
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(500);
      setFlashColor("");
      await timeout(500);

      if (i === play.colors.length - 1) {
        const copyColors = [...play.colors];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
      }
    }
  }

  async function cardClickHandle(color) {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);

      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await timeout(200);
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await timeout(200);
        setPlay({ ...initPlay, score: play.colors.length });
      }
      await timeout(200);
      setFlashColor("");
    }
  }

  function closeHandle() {
    setIsOn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="cardWrapper">
          {colorList &&
            colorList.map((v, i) => (
              <ColorCard
                key={v}
                onClick={() => {
                  new Audio(
                    `https://s3.amazonaws.com/freecodecamp/simonSound1.mp3`
                  ).play();
                  cardClickHandle(v);
                }}
                flash={flashColor === v}
                color={v}
              ></ColorCard>
            ))}
        </div>

        {isOn && !play.isDisplay && !play.userPlay && play.score && (
          <div className="lost">
            <div>FinalScore: {play.score}</div>
            <button onClick={closeHandle}>Close</button>
          </div>
        )}
        {!isOn && !play.score && (
          <button onClick={startHandle} className="startButton">
            Start
          </button>
        )}
        {isOn && (play.isDisplay || play.userPlay) && (
          <div className="score">
            <br /> Score <br />
            {play.score}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
