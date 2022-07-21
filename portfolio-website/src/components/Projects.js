import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import memoryGame from "../assets/img/memory-game.png"
import rockPaperScissor from "../assets/img/rock-paper-scissor.png"
import spaceInvaders from "../assets/img/space-invaders.png"
import whackaMole from "../assets/img/whack-a-mole.png"
import toDoList from "../assets/img/todolist.png"
import calc from "../assets/img/calc-min.png"
import weAccept from "../assets/img/we-accept.png"
import portfolio from "../assets/img/portfolio.png"


export const Projects = () => {

  const websites = [
    {
      title: "We Accept",
      description: "Clone & Development",
      url : "#",
      imgUrl: weAccept,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      url : "https://tunchahmet.netlify.app/",
      imgUrl: portfolio,
    }
  ];

  const games = [
    {
      title: "Space Invader",
      description: "Space Invader is a game where you try to destroy the alien invaders.",
      url : "https://browsergames1.netlify.app/space-invaders/index.html",
      imgUrl: spaceInvaders,
    },
    {
      title: "Memory Game",
      description: "Click on cards to find matching pairs.",
      url : "https://browsergames1.netlify.app/memory-game/index.html",
      imgUrl: memoryGame,
    },
    {
      title: "Whack a Mole",
      description: "Click on the mole to find out what it is.",
      url : "https://browsergames1.netlify.app/whack-a-mole/index.html",
      imgUrl: whackaMole,
    },
    {
      title: "Rock Paper Scissors",
      description: "Click on buttons to play Rock Paper Scissors.",
      url : "https://browsergames1.netlify.app/rock-paper-scissor/index.html",
      imgUrl: rockPaperScissor,
    },
  ];

  const apps = [
    {
      title: "Online Calculator",
      description: "Design & Development",
      url : "https://kasiyoonlinecalculator.netlify.app",
      imgUrl: calc,
    },
    {
      title: "to-do List",
      description: "Design & Development",
      url : "https://todolistfromtunc.netlify.app",
      imgUrl: toDoList,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>I'm building websites and creating apps and games during learning software engineering. <br/><br/> You will go to the project website if you click the "<b>click me</b>" text. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link className="pointer" eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="pointer" eventKey="second">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="pointer" eventKey="third">Apps</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          websites.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            games.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {
                            apps.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="right-lighter"></img>
    </section>
  )
}