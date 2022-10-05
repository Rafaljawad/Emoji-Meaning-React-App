import React from "react";

function EmojiCard(props) {
  return (
    <div className="card">
      <h2>
        {props.name} {props.emoji}
      </h2>
      <hr />
      <p>{props.meaning}</p>
    </div>
  );
}
export default EmojiCard;
