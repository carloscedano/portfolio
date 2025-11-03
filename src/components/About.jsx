function About() {
  return (
    <section className="about-me" id="about-me">
      <div id="bar">
        <h1 className="subtitle" id="about">
          About Me
        </h1>
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
      </div>

      <div id="window">
        <div id="content">
          <div className="pair">
            <h1 className="command">&gt; carloscedano.bio</h1>
            <h1 className="output">
              I am Carlos Cedano, a freshman at Yale University studying
              electrical engineering and computer science. I strive to use my
              skills to impact the communities that surround me.
            </h1>
          </div>

          <div className="pair">
            <h1 className="command">&gt; carloscedano.interests</h1>
            <h1 className="output">
              ["Basketball", "Table Tennis", "Artificial Intelligence",
              "Robotics"]
            </h1>
          </div>

          <div className="pair">
            <h1 className="command">&gt; carloscedano.education</h1>
            <h1 className="output">
              ["B.S. Electrical Engineering and Computer Science @ Yale
              University"]
            </h1>
          </div>

          <div className="pair">
            <h1 className="command">&gt; carloscedano.location</h1>
            <h1 className="output">Bronx, New York</h1>
          </div>

          <div className="pair">
            <span className="command">&gt;</span>
            <span id="cursor">|</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
