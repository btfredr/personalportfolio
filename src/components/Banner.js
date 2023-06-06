import { Container, Row, Column } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio.</span>
            <h1>
              {`Hi, I'm Fredrik`} <span className="wrap">web developer</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typeselling
              industry.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
