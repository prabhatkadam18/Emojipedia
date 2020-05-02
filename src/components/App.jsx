import React from "react";
import Entry from "./Entry";
import emojis from "../emojipedia";

// const newarray = emojis.map(function(emoji){
//   return emoji.meaning.substring(0,100);
// })

// console.log(newarray);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojis.map((emoji) => 
          <Entry
            key={emoji.id}
            title={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}
          />
        )}
      </dl>
    </div>
  );
}

export default App;
