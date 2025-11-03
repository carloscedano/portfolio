import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />

      <a id="email" href="mailto:carlos.cedanollano@yale.edu">
        carlos.cedanollano@yale.edu
      </a>

      <div className="side-icons">
        <a href="https://www.linkedin.com/in/carlos-cedano-804069317">
          <img src={linkedin} alt="LinkedIn" id="linkedin" />
        </a>
        <a href="https://github.com/carloscedano">
          <img src={github} alt="GitHub" id="github" />
        </a>
      </div>
    </>
  );
}

export default App;
