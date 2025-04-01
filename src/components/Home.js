import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "../App.css"; 

export const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} lg={10} xl={8} className="mx-auto text-center">
            <div className="hero-content">
              <h1>
                <span className="hi">Hello, I'm</span>
                <span className="name"> Yomna.</span>
                <br />
                <span className="title">Aspiring Web Developer.</span>
              </h1>
              <p className="subtext">
                Passionate about learning and building modern web experiences.  
                Currently honing my skills in web development and excited to grow in the field!
              </p>
              <button
                className="scroll-down-btn"
                onClick={() => {
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More <ArrowDownCircle size={25} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
