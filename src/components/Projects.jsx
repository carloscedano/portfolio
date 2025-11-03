import xrayImage from "../assets/xray-diagnosis.png";
import gitLogo from "../assets/github.png";
import drivetrainVideo from "../assets/drivetrain.mov";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="title" id="project-title">
        Projects
      </h1>

      <div className="project-container">
        <div className="project">
          <h1 className="subtitle">AI-powered Chest X-Ray Diagnosis</h1>
          <img src={xrayImage} alt="X-Ray Project" id="xray-image" />
          <p className="desc">
            As part of a symposium project, my team and I developed a
            convolutional neural network to distinguish between Pneumonia and
            Tuberculosis chest X-rays. This project helps doctors overcome the
            difficulty of visually differentiating these conditions—a challenge
            often complicated by human uncertainty. Using
            <strong> TensorFlow </strong> and <strong> Python</strong>, we built
            a model that achieves <strong>98.3% accuracy</strong> in predicting
            the correct diagnosis.
          </p>
          <a href="https://gist.github.com/carloscedano/b63ae6a861c428da542e5a92431687c3">
            <img src={gitLogo} alt="GitHub" id="git-link" />
          </a>
        </div>

        <div className="project">
          <h1 className="subtitle">Custom Drivetrain</h1>
          <video src={drivetrainVideo} controls id="drivetrain-video"></video>
          <p className="desc">
            I designed a <strong>custom drivetrain</strong> to challenge my
            skills in electrical and mechanical engineering while creating a
            smooth, fast, and responsive system. Custom drivetrains enhance
            mobility, optimize space for mechanisms, and promote greater
            creativity and innovation in robot design.
          </p>
        </div>
      </div>

      <p id="footer">&copy; 2025 Carlos Cedano ~ Updates Coming Soon</p>
    </section>
  );
}

export default Projects;