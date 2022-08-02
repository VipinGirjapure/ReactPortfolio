
import colorSharp2 from "../Components/Img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
// import Navbar from "react-bootstrap/Navbar";
import projImg1 from "../Components/Img/project-Img/ToDoJS.jpg";
import projImg2 from "../Components/Img/project-Img/sahara.jpg";
import projImg3 from "../Components/Img/project-Img/running car.jpg";
import projImg4 from "../Components/Img/project-Img/MovieFinderApp.jpg";
import projImg5 from "../Components/Img/project-Img/clock js.jpg";
import projImg6 from "../Components/Img/project-Img/CalcSimple2.jpg";
import projImg7 from "../Components/Img/project-Img/PortfolioHTML.jpg";
import projImg8 from "../Components/Img/project-Img/PortfolioHTML.jpg";


import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projectsTabOne = [
    {
      id: 1,
      title: "To Do List App",
      description: "A javaScript Project",
      imgUrl: projImg1,
    },
    {
      id: 2,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      id: 3,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      id: 4,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      id: 5,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      id: 6,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    
  ];
  const projectsTabTwo = [
   {
      id: 7,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      id: 8,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      id: 9,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      id: 10,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      id: 11,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      id: 12,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
   
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2 className="project-heading">Projects</h2>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-contenct-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="two">Tab Two</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="third" id="projects-tabs-tab-third ">Tab Three</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content
                id="slideInUp"
                className={
                  isVisible ? "animate__animated animate__slideInUp" : ""
                }
              >
                <Tab.Pane eventKey="first">
                  {" "}
                  <Row>
                    {projectsTabOne.map((projects, index) => {
                      return <ProjectsCard key={projects.id} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="two">
                  {" "}
                  <Row>
                    {projectsTabTwo.map((projects, index) => {
                      return <ProjectsCard key={projects.id} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="three">lorem3</Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt="backgroud"
        className="background-image-right"
      />
    </section>
  );
};

export default Projects;
