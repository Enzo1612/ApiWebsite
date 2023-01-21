import React, { useState, useEffect } from "react";

function Memes() {
  const url = "http://numbersapi.com/random/trivia";
  const getImage = () => {
    fetch(url).then((response) => {
      setMeme(response.data);
      console.log(meme);
    });
  };
  const [meme, setMeme] = useState("");

  useEffect(() => {
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
}

export default Memes;
