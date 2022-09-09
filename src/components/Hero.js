import React from "react";
import Mee from "./memesData"

export default function Hero() {
  const [memeImage,setMemeImage]=React.useState("")

  function handleClick(){
    const memes=Mee.data.memes;
    const random=Math.floor(Math.random() * memes.length)
    setMemeImage(memes[random].url)

  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-button" onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="images"/>
    </main>
  );
}







