import React, { useEffect } from "react";
import { useState } from "react";
import "./Joke.css";

function Joke() {
  const [joke, setJoke] = useState("");

  const getJoke = (e) => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((response) => response.json())
      .then((response) => {
        setJoke(response.setup + "..." + response.delivery);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <div className="jokeContainer">
        <p id="joke">{joke}</p>
        <button onClick={getJoke} id="button">
          Generate a new joke
        </button>
      </div>
    </div>
  );
}

export default Joke;
