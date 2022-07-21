import { Container, Row, Col  } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import courseraJs from '../assets/img/coursera-js.webp'
import courseraFigma from '../assets/img/coursera-figma.webp'
import frontend from '../assets/img/frontend.webp'
import jsBilge from '../assets/img/Javascript-Sertifika.webp'
import cssBilge from '../assets/img/CSS-sertifika.webp'
import htmlBilge from '../assets/img/html-bilge.webp'
import algo from '../assets/img/algoritma.webp'
import access from '../assets/img/access.webp'
import scratch from '../assets/img/scratch.webp'
import scratch2 from '../assets/img/scratch2.webp'
import python from '../assets/img/python.webp'
    
export const Certificates = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="certificates" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Certificates</h2>
                <p>I do not have the certificates of all the courses I have completed due to the certificate fees. I have these shareable certificates which located below.</p>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme certificates-slider">
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={frontend} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Patika.dev Frontend Developer</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={courseraJs} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Modern JavaScript</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={courseraFigma} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Figma</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={jsBilge} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>JavaScript</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={cssBilge} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>CSS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={htmlBilge} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>HTML</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={scratch} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Scratch for Educators I</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={scratch2} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Scratch for Educators II</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={python} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={algo} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Algorithm</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="proj-imgbx">
                            <img src={access} alt="certificate" />
                            <div className="proj-txtx">
                                <h4>Microsoft Access</h4>
                            </div>
                        </div>
                    </div>
                </Carousel>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background-lighter" src={colorSharp2}></img>
    </section>
  )
}