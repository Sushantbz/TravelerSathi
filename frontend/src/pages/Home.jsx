import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";

const Home = () => {
  return (
    <>
      {/*------ hero section starts here ----------*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  {" "}
                  Travelling Opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ullam maxime voluptatibus et sunt, voluptas,
                  delectus facilis officia laudantium accusamus voluptate
                  mollitia? Deserunt facere, aut accusamus ipsa quas iste
                  debitis.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
