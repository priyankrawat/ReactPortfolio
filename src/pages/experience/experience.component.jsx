import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <h1> <strong>Upwork Inc.</strong></h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">FREELANCE WEB DEVELOPER</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> React JS, Node JS, React Native, PHP
                    <br />
                    <strong>Duration:</strong> September 2019 - Present
                    <br/><br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Working with a <strong>varied client base</strong> to produce websites using React.js, Node.js, PHP, MySQL.</li>
                      <li>Maintained a <strong>100% Job success score </strong> on the platform.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>



      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <h1> <strong>Infotech Standards India Pvt. Ltd.</strong></h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">WEB DEVELOPER</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong>
                    <br /> */}
                    <strong>Technology:</strong> PHP, MySQL, JavaScript, HTML & CSS
                    <br />
                    <strong>Duration:</strong> June 2019 - August 2019
                    <br/><br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Re-platformed </strong> the company website to be responsive with a new website design.</li>
                      <li> Employed <strong>search engine optimization</strong> tactics to increase the reach of targeted audience.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
