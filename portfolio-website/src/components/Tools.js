import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import figma from "../assets/img/figma.webp"
import linux from "../assets/img/linux.webp"
import github from "../assets/img/github.webp"
import code from "../assets/img/code.webp"
import canva from "../assets/img/canva.webp"
import 'animate.css'
import TrackVisibility from 'react-on-screen';

export const Tools = () => {
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
    <section className="tools" id="tools">
      <TrackVisibility>
      {({isVisible}) =>
        <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tools-bx wow zoomIn">
                        <h2>Tools</h2>
                        <p>I can use these tools to create a project from scratch.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme tools-slider">
                            <div className="item">
                                <img src={linux} alt="linux" />
                                <h5>Linux OS</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="github" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={code} alt="code" />
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <img src={canva} alt="canva" />
                                <h5>Canva</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="left-lighter" />
        </div>}
        </TrackVisibility>
    </section>
  )
}