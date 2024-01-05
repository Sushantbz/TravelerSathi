
=======
import React from "react"
import "../styles/home.css"
import { Container, Row, Col } from "reactstrap"
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.gif"
import Subtitle from "../shared/Subtitle"
import SearchBar from "../shared/SearchBar"
import ServiceList from "../services/ServiceList"
>>>>>>> 8c718dcc4b2c3fa58d1271cba95b5cd66df3eed4

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
									Welcome to the Gateway of Unforgettable{" "}
									<span className="highlight">Adventures!</span>
								</h1>
								<p>
									Dreaming of a getaway that perfectly matches your desires?
									You're in the right place! At TravelerSathi, we believe that
									every journey should be as unique as the traveler.
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
						<SearchBar />
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<div lg="3">
							<h5 className="services__subtitle">What we serve</h5>
							<h2 className="services__title">We offer our Best Services</h2>
						</div>
						<ServiceList />
					</Row>
				</Container>
			</section>

			{/*------------------ featured tour section start--------------*/}
			<section>
				<Container>
					<Row>
						<div lg="12" className="mb-5">
							<Subtitle subtitle={"Explorer"} />
							<h2 className="featured__tour-title"></h2>
						</div>
					</Row>
				</Container>
			</section>
			{/*------------------ featured tour section end--------------*/}
		</>
	)
}

<<<<<<< HEAD
      {/*------------------ featured tour section start--------------*/}
      <section>
        <Container>
          <Row>
            <div lg='12' className="mb-5">
              
              <h2 className="featured__tour-title">Your title here</h2>
            </div>
          </Row>
        </Container>
      </section>
      {/*------------------ featured tour section end--------------*/}
      <section>
        <Container>
          <Row>
            <div lg='12' className="mb-5">
            
              <h2 className="featured__tour-title">Our featured tours</h2>
                </div>
            <FeaturedTourList />
          </Row>
        </Container>

      </section>
    </>
  );
};

export default Home;
=======
export default Home
>>>>>>> 8c718dcc4b2c3fa58d1271cba95b5cd66df3eed4
