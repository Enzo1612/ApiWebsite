import React, { useState } from "react";
import Joke from "./components/Joke";
import "./App.css";
import Activities from "./components/Activities";

function App() {
  let [tag, setTag] = useState(<Joke />);
  const jokeTag = () => {
    return setTag(<Joke />);
  };

  const activitiesTag = () => {
    return setTag(<Activities />);
  };
  return (
    <div className="App">
      <div className="appButtonDiv">
        <button onClick={jokeTag} className="appButtons">
          Jokes
        </button>
        <button onClick={activitiesTag} className="appButtons">
          Activities
        </button>
      </div>
      {tag}
    </div>
  );
}

export default App;
