import React from "react";
import emojipedia from "../emojipedia.js";
import EmojiCards from "./emojiCards.jsx";

function CreateEmojiCard(em) {
  return (
    <EmojiCards
      key={em.id}
      emoji={em.emoji}
      name={em.name}
      meaning={em.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmojiCard)}</dl>
    </div>
  );
}

export default App;
