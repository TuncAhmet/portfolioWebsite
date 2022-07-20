import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import memoryGame from "../assets/img/memory-game.png"
import rockPaperScissor from "../assets/img/rock-paper-scissor.png"
import spaceInvaders from "../assets/img/space-invaders.png"
import whackaMole from "../assets/img/whack-a-mole.png"
import toDoList from "../assets/img/todolist.png"
import calc from "../assets/img/calc.png"
import weAccept from "../assets/img/we-accept.png"
import portfolio from "../assets/img/portfolio.png"


export const Projects = () => {

  const websites = [
    {
      title: "We Accept",
      description: "Clone & Development",
      imgUrl: weAccept,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: portfolio,
    }
  ];

  const games = [
    {
      title: "Space Invader",
      description: "Space Invader is a game where you try to destroy the alien invaders.",
      imgUrl: spaceInvaders,
    },
    {
      title: "Memory Game",
      description: "Click on cards to find matching pairs.",
      imgUrl: memoryGame,
    },
    {
      title: "Whack a Mole",
      description: "Click on the mole to find out what it is.",
      imgUrl: whackaMole,
    },
    {
      title: "Rock Paper Scissors",
      description: "Click on buttons to play Rock Paper Scissors.",
      imgUrl: rockPaperScissor,
    },
  ];

  const apps = [
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: calc,
    },
    {
      title: "to-do List",
      description: "Design & Development",
      imgUrl: toDoList,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Apps</Nav.Link>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}