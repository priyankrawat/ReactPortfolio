import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects

import L_MyUttarakhandReactNativeApp from "../../assets/img/projects/myuttarakhand.jpg";
import L_CoronaTracker from "../../assets/img/projects/coronatracker.jpg";
import L_MoviesDatabase from "../../assets/img/projects/moviesdatabase.jpg";
import L_NETFLIX from "../../assets/img/projects/netflix.png";
import L_ReactAppusingBreakingBadAPI from "../../assets/img/projects/breakingbad.jpg";
import L_ReactReduxFirebaseApp from "../../assets/img/projects/reactredux.jpg";
import L_SnapWall from "../../assets/img/projects/snapwall.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACTROUTER from "../../assets/img/skills/react-router.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_REACTNATIVE from "../../assets/img/skills/react-native.svg";
import L_PHP from "../../assets/img/skills/php.svg";
import L_MYSQL from "../../assets/img/skills/mssql.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import L_STYLEDCOMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: My Uttarakhand */}
        <ImageEvent
            date="REACT NATIVE APP"
            className="text-center"
            text="React Native App - My Uttarakhand"
            src={L_MyUttarakhandReactNativeApp}
            alt="My Uttarakhand React Native App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This App is created with React Native (Expo Cli), PHP, My-SQL, Firebase. This is a city tour guide app.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>The mobile app is developed in React Native using Expo Cli.</li>
                          <li>Fully funtional Administration panel developed in PHP which is used to fetch data as JSON in React Native.</li>
                          <li>Ecommerce payment feature integrated with Stripe and Paypal Gateway.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACTNATIVE}
                                alt="React Native"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Native (Expo Cli)
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="MYSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              My-SQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://travelapp-priyankrawat.ml/controller/home.php"
                  target="_blank"
                >
                  BACKEND
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1TmoScT7q-nTE4prnoqV8B96BN5T_bBh8/view?usp=sharing"
                  target="_blank"
                >
                  DOWNLOAD APK
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1CAUa4MT0FyCQi7o9pUs_7OR8_r8Y8PAO/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: Netflix Clone */}
<ImageEvent
            date="REACT APP"
            className="text-center"
            text="Netflix Clone Using React (Custom Hooks, Context, Portals), Firebase, Compound & Styled Components"
            src={L_NETFLIX}
            alt="Netflix Clone Using React (Custom Hooks, Context, Portals), Firebase, Compound & Styled Components"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This application (a Netflix clone) was built using React (Custom Hooks, Context), Firebase & Styled Components. I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Pages uses protected routes with auth listeners.</li>
                          <li>Firebase firestore handles all the data and that data is retrieved using a custom hook.</li>
                          <li>Authentication is used on all pages, which is handled by Firebase as well.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLEDCOMPONENTS}
                                alt="styled-components"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Styled Components
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/priyankrawat/netflixclone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              
                <UrlButton
                  href="https://modest-ritchie-56cd43.netlify.app/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Corona Tracker */}
          <ImageEvent
            date="REACT APP"
            className="text-center"
            text="Corona Tracker"
            src={L_CoronaTracker}
            alt="Corona Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Corona Tracker created using React js,
                         Charts.js, Material UI.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Corona Stats Updates</li>
                          <li>Real-time API calls</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/priyankrawat/coronaTracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://covid19statswebsite.netlify.app/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Movies Database */}
          <ImageEvent
            date="REACT APP"
            className="text-center"
            text="Movies Database with ReactJS"
            src={L_MoviesDatabase}
            alt="Movies Database"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Movie Library made with ReactJS using <a href ="https://www.themoviedb.org/">The Movie Database API</a>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real- time API calls.</li>
                          
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACTROUTER}
                                alt="React Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLEDCOMPONENTS}
                                alt="Styled Components"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Styled Components
                            </span>
                          </li>
                        </ul>
                        
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/priyankrawat/moviesdatabase"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://moviesdatabase-react.netlify.app/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: React-Redux-Firebase-App */}

          <ImageEvent
            date="REACT APP"
            className="text-center"
            text="React Redux Firebase App"
            src={L_ReactReduxFirebaseApp}
            alt="React-Redux-Firebase-App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A mini social app with Authentication and user submission form.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User Authentication using Firebase</li>
                          <li>Form Submission feature.</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="REDUX"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/priyankrawat/React-Redux-Firebase-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://travel-feels.firebaseapp.com/create"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: Breaking Bad */}

          <ImageEvent
            date="REACT APP"
            className="text-center"
            text="React App using Breaking Bad API"
            src={L_ReactAppusingBreakingBadAPI}
            alt="React App using Breaking Bad API"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> React project that uses the <a href ="https://breakingbadapi.com/documentation">
                        breaking bad api
                        </a> to show and 
                        filter characters from the show
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real-time API calls</li>
                          <li>AJAX Search</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/priyankrawat/breakingbad"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://5f2191fafa866b4cac6ecb79--nervous-hodgkin-b71450.netlify.app/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: SnapWall */}
          <ImageEvent
            date="REACT APP"
            className="text-center"
            text="MERN Application - SnapWall"
            src={L_SnapWall}
            alt="MERN Application Login"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> MERN Application Login/ SignUp with Email (JWT) + 
                        Google OAuth Authentication
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>JWT and Google OAuth Authentication.</li>
                          <li>Protected routes visible to logged in users only.</li>
                          <li>Submit a blog with image uploading feature.</li>
                          <li>Like a post.</li>
                           </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="EXPRESS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MONGODB"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Mongo DB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NODE JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node JS
                            </span>
                          </li>
                          
                        </ul>
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/priyankrawat/SnapWall" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
