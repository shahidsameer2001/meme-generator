import React from "react";



export default function Header(){
    return (
      <nav>
        <div className="Emoji">
          <img
            src="https://www.pngkit.com/png/detail/13-133661_trollface-clipart-imagenes-de-emojis-troll.png"
            alt=""
            className="emoj"
          />
          <h2>Meme Generator</h2>
        </div>
        <div className="topic">
            <p>React Course - Project 3</p>
        </div>
      </nav>
    );
}