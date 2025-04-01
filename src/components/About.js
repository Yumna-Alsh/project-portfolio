import "animate.css";
import htmlLogo from "../assets/img/html-logo.svg";
import cssLogo from "../assets/img/css-logo.svg";
import jsLogo from "../assets/img/js-logo.svg";
import reactLogo from "../assets/img/react-logo.svg";
import bootstrapLogo from "../assets/img/bootstrap-logo.svg";
import nodeLogo from "../assets/img/node-logo.svg";
import mongoLogo from "../assets/img/mongo-logo.svg";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
                Hi, I'm an aspiring web developer passionate about creating
                user-friendly and responsive websites. I recently started my
                journey in web development and love exploring new technologies.
                I'm currently learning:
              </p>

              <div className="tech-stack">
                <div className="tech-item">
                  <img src={htmlLogo} alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="tech-item">
                  <img src={cssLogo} alt="CSS" />
                  <span>CSS</span>
                </div>
                <div className="tech-item">
                  <img src={jsLogo} alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className="tech-item">
                  <img src={reactLogo} alt="React.js" />
                  <span>React.js</span>
                </div>
                <div className="tech-item">
                  <img src={bootstrapLogo} alt="Bootstrap" />
                  <span>Bootstrap</span>
                </div>
                <div className="tech-item">
                  <img src={nodeLogo} alt="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <img src={mongoLogo} alt="MongoDB" />
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
