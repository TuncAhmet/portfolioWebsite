import html from '../assets/img/html.webp'
import css from '../assets/img/css.webp'
import JavaScript from '../assets/img/javascript.webp'
import react from '../assets/img/react.webp'
import bootstrap from '../assets/img/bootstrap.webp'
import TypeScript from '../assets/img/typescript.webp'
import cpp from '../assets/img/cc++.webp'
import csharp from '../assets/img/csharp.webp'
import java from '../assets/img/java.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have the knowledge and/or ability to use these programming languages and technologies.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="html" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScript} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="bootstrap" />
                                <h5>bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={TypeScript} alt="TypeScript" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="csharp" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="cpp" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="java" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="left-lighter" />
    </section>
  )
}