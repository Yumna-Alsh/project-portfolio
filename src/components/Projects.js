import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-js-nyan-cat.gif";
import projImg2 from "../assets/img/project-img2.png";

export const Projects = () => {
  const projects = [
    {
      title: "project-js-nyan-cat",
      description: "Object Oriented Programming Game Project",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Yumna-Alsh/project-js-nyan-cat", 

    },
    {
      title: "Coming Soon!",
      imgUrl: projImg2,
    },
    {
      title: "Coming Soon!",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
