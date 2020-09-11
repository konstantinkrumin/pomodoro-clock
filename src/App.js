import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./helpers/fontAwesome";
import "./styles/main.scss";

import displayingTime from "./helpers/displayingTime";
import Context from "./context";

import BlockContainer from "./components/blockContainer";

export default function App() {
  const DEFAULT_ISSESSION_VALUE = true;
  const DEFAULT_SESSION_LENGTH = 25;
  const DEFAULT_BREAK_LENGTH = 5;
  const DEFAULT_TIMER_LENGTH = DEFAULT_SESSION_LENGTH * 60;
  const DEFAULT_DISPLAY_TIME = displayingTime(DEFAULT_TIMER_LENGTH);
  const DEFAULT_START_OR_STOP = false;

  const beepSound =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3";

  const [isSession, setIsSession] = useState(DEFAULT_ISSESSION_VALUE);
  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_LENGTH);
  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK_LENGTH);

  const [timerLength, setTimerLength] = useState(DEFAULT_TIMER_LENGTH);
  const [displayTime, setDisplayTime] = useState(DEFAULT_DISPLAY_TIME);

  const [startOrStop, setStartOrStop] = useState(DEFAULT_START_OR_STOP);

  useEffect(() => {
    if (startOrStop && timerLength !== 0) {
      const timeout = setInterval(() => {
        setTimerLength((timerLength) => timerLength - 1);
      }, 1000);

      return () => clearInterval(timeout);
    } else if (timerLength === 0) {
      setTimerLength(0);
      playAudio();

      const timeout = setTimeout(() => {
        setIsSession(!isSession);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [startOrStop, timerLength]);

  useEffect(() => {
    setTime();
  }, [isSession]);

  useEffect(() => {
    setTime();
  }, [sessionLength, breakLength]);

  useMemo(() => {
    let timerValues = displayingTime(timerLength);
    setDisplayTime(timerValues);
  }, [timerLength]);

  function setTime() {
    let time = (isSession ? sessionLength : breakLength) * 60;
    setTimerLength(time);
  }

  function playAudio() {
    const audio = document.getElementById("beep");
    audio.play();
    audio.currentTime = 0;
  }

  function pauseAudio() {
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }

  function handleStartStop() {
    setStartOrStop(!startOrStop);
  }

  function handleReset() {
    setStartOrStop(DEFAULT_START_OR_STOP);
    setIsSession(DEFAULT_ISSESSION_VALUE);
    setBreakLength(DEFAULT_BREAK_LENGTH);
    setSessionLength(DEFAULT_SESSION_LENGTH);
    setTimerLength(DEFAULT_TIMER_LENGTH);
    setDisplayTime(DEFAULT_DISPLAY_TIME);

    pauseAudio();
  }

  function handleClick(event) {
    const { id } = event.currentTarget;

    if (breakLength !== 1 && id === "break-decrement") {
      setBreakLength((prevBreakLength) => prevBreakLength - 1);
    } else if (breakLength !== 60 && id === "break-increment") {
      setBreakLength((prevBreakLength) => prevBreakLength + 1);
    } else if (sessionLength !== 1 && id === "session-decrement") {
      setSessionLength((prevSessionLength) => prevSessionLength - 1);
    } else if (sessionLength !== 60 && id === "session-increment") {
      setSessionLength((prevSessionLength) => prevSessionLength + 1);
    }
  }

  let timerTitle = isSession ? "Session" : "Break";

  return (
    <Context.Provider
      value={{
        FontAwesomeIcon,
        beepSound,
        timerTitle,
        displayTime,
        startOrStop,
        handleClick,
        handleStartStop,
        handleReset
      }}
    >
      <div id="main-window">
        <BlockContainer
          breakLength={breakLength}
          sessionLength={sessionLength}
        />
      </div>
    </Context.Provider>
  );
}
