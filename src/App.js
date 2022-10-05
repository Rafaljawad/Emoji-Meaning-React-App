import logo from "./logo.svg";
import "./App.css";
import EmojiCard from "./components/card";
import emojiInfo from "./emojiesInfo";
const d = new Date();
let year = d.getFullYear();
function emojiDetails(singleEmoji) {
  return (
    <EmojiCard
      name={singleEmoji.name}
      meaning={singleEmoji.meaning}
      emoji={singleEmoji.emoji}
    />
  );
}
function App() {
  return (
    <div className="App">
      <header className="header">Emoji Meaning App</header>
      <hr></hr>
      <div className="main">{emojiInfo.map(emojiDetails)}</div>
      <hr />
      <footer>
        <p>Made with 💗</p>
        <p>
          Copyright© {year} <a href="https://emojipedia.org/">Emojipedia</a>
        </p>
      </footer>
      <p>hello</p>
    </div>
  );
}

export default App;
