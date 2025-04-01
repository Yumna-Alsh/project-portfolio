import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth - 0.5) * 20, 
      y: (clientY / window.innerHeight - 0.5) * 20,
    });
  };

  return (
    <section className="contact" id="contact" onMouseMove={handleMouseMove}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img src={contactImg} alt="Contact Us" />
            </div>
          </Col>
          <Col size={12} md={6}>
            <form>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" placeholder="Full Name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" placeholder="Email Address" />
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="6" placeholder="Message"></textarea>
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
