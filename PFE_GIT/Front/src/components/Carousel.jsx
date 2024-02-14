import React from "react";
import { Row, Col } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import G1 from "./imgs/E-4.png";
import G2 from "./imgs/X2.png";
import G3 from "./imgs/E-3.png";
import "./component.css";

export default function App() {
  return (
    <Row
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "50px 0",
        height: "700px",
      }}
    >
      <Col className="fw-normal text-center my-auto" data-aos="slide-down">
        <h1>Nouveautés</h1>
        <br />
        <h2>Notre Nouveau catalogue Avec les technologies le plus avancées </h2>
      </Col>
      <Col md={6} data-aos="slide-down" className="my-auto">
        <MDBCarousel showControls interval={9000}>
          <MDBCarouselItem itemId={1} interval={3000}>
            <img
              src="https://th.bing.com/th/id/R.8593980719357abc021e94c5524207ca?rik=c%2f9QwsRpoDn47w&pid=ImgRaw&r=0"
              className="d-block w-100 mx-auto"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={G3} className="d-block w-75 mx-auto" alt="..." />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={G1} className="d-block w-75 mx-auto" alt="..." />
          </MDBCarouselItem>
        </MDBCarousel>
      </Col>
    </Row>
  );
}
