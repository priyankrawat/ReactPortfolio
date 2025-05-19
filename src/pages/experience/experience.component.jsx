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
              <h1> <strong>Woven</strong></h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full-Stack Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> React JS, Javascript, Typescript.
                    <br />
                    <strong>Duration:</strong> May 2021 - Present
                    <br/><br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Migrated legacy React class components to functional components using Hooks.</li>
                      <li>Implemented a new free trial experience, decreasing CAC by 18% and increasing trial-to-signup conversion by 22%.</li>
                      <li>Deployed a comprehensive error monitoring and alerting system using Rollbar and Slack integration, enabling real-time error tracking, automated alerts, and team-wide visibility.</li>
                      <li>Built an AI-powered evaluation system using GPT-4 and custom LLMs, replacing manual screening workflows and enabling performance tracking through Metabase dashboards.</li>
                      <li>Developed a robust candidate assessment platform processing 1000+ daily records with 99.9% uptime.</li>
                      <li>Engineered real-time ATS integrations (Greenhouse & Ashby), automating over 1,000 daily candidate status syncs, reducing recruiter manual work, and improving team efficiency.</li>
                      <li>Optimized system performance using Redis caching and query tuning, reducing response times by 25%.</li>
                      <li>Designed and launched an automated scoring pipeline with scenario-specific logic and LLM-driven recommendations, improving accuracy and reviewer efficiency.</li>
                      <li>Established Docker-based CI/CD pipelines and monitoring tools, reducing deployment time by 30%.</li>
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
                    <strong>Duration:</strong> September 2019 - May 2021
                    <br/><br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Working with a <strong>varied client base</strong> to produce websites using React.js, Node.js, PHP, MySQL.</li>
                      <li>Maintained a <strong>100% Job success score </strong> on the platform and earned a <a href= "https://support.upwork.com/hc/en-us/articles/360049702614-Upwork-s-Talent-Badges#:~:text=To%20earn%20a%20Top%20Rated,3%25%20of%20performers%20on%20Upwork.">"Top Rated Plus" </a> badge.</li>
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
