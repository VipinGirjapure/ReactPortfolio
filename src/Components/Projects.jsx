
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
import projImg7 from "../Components/Img/project-Img/CalcSimple.jpg";
import projImg8 from "../Components/Img/project-Img/PortfolioHTML.jpg";
import projImg9 from "../Components/Img/project-Img/PortfolioYellow.jpg";
import projImg10 from "../Components/Img/project-Img/clockJsMobile.jpg";
import projImg11 from "../Components/Img/project-Img/AdviceApp.jpg";
import projImg12 from "../Components/Img/project-Img/TheSiren.jpg";


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
      title: "Sahara Website",
      description: "A HTML/CSS Project",
      imgUrl: projImg2,
    },
    {
      id: 3,
      title: "Running Car",
      description: "A HTML/CSS Project",
      imgUrl: projImg3,
    },
    {
      id: 4,
      title: "Movie Finder App",
      description: "A React Project",
      imgUrl: projImg4,
    },
    {
      id: 5,
      title: "Alarm Clock App",
      description: "A HTML/CSS/JS Project",
      imgUrl: projImg5,
    },
    {
      id: 6,
      title: "Calculator",
      description: "A HTML/CSS/ReactJs Project",
      imgUrl: projImg6,
    },
    
  ];
  const projectsTabTwo = [
   {
      id: 7,
      title: "Calculator",
      description: "A HTML/CSS Project",
      imgUrl: projImg7,
    },
    {
      id: 8,
      title: "Portfolio",
      description: "A HTML/CSS Project",
      imgUrl: projImg8,
    },
    {
      id: 9,
      title: "Portfolio",
      description: "A HTML/CSS/ReactJs Project",
      imgUrl: projImg9,
    },
    {
      id: 10,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      id: 11,
      title: "Advice App",
      description: "A HTML/CSS/ReactJs Project",
      imgUrl: projImg11,
    },
    {
      id: 12,
      title: "News WebApp",
      description: "A HTML/CSS/ReactJs/NodeJs Project",
      imgUrl: projImg12,
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
