import { useEffect, useState } from "react";
import headshot from "../assets/headshot.png";

function Home() {
  const words = [
    "I'm an electrical engineer",
    "I'm an entrepreneur",
    "I'm an innovator",
    "I'm a software engineer",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 80);
    } else {
      if (!deleting) {
        timeout = setTimeout(() => setDeleting(true), 1500);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section className="home">
      <div id="nav">
        <a className="menu" href="#about-me">
          About Me
        </a>
        <a className="menu" href="#projects">
          Projects
        </a>
      </div>

      <h1 className="title">Carlos Cedano</h1>
      <img src={headshot} alt="Profile" id="headshot" />

      <div className="description">
        <span id="adj">{text}</span>
        <span className="cursor">|</span>
      </div>
    </section>
  );
}

export default Home;
