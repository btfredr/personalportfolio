import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import html from "../assets/img/html.png";
import css from "../assets/img/CSS3.png";
import js from "../assets/img/js.png";
import react from "../assets/img/React.png";
import tw from "../assets/img/tailwind.png";
import sass from "../assets/img/sass.svg";
import bs from "../assets/img/bs.svg";
import fb from "../assets/img/firebase.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I mainly focus on React, but I have a lot of other experience
                too.
                <br></br> Slide through to see the different technologies:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={tw} alt="Image" />
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src={bs} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
