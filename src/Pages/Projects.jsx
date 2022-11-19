import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section" style={{backgroundColor:"#A2B38B"}}>
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://www.linkpicture.com/q/Screenshot-143.png"
              title="Smallcase clone"
              description="This website is an online platform that invests in model portfolios of stocks, Exchange-traded funds, REITs, etc. a theme or a strategy. On this website, An investor can create its own model portfolio (smallcases) or invest in professionally managed smallcases created by SEBI registered entities or individuals such as research analysts, registered investment advisors (RIA) etc."
              tech="Tech-Stacks"
              techD="Html | Javascript | Node.js | Css | MongoDb | Express "
              link="https://smallcase7171.netlify.app/"
              a="https://github.com/atin-sahu/smallcase-frontend-.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/plural.png"
              title="Pluralsight clone"
              description="Pluralsight, Inc. is an American privately held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals through its website."
              tech="Tech-Stacks"
              techD="Html | Javascript | CSS | Boostrap  "
              link="https://magnificent-blancmange-2320fc.netlify.app/"
              a="https://github.com/rajujai/pluralsight_clone.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://www.linkpicture.com/q/Screenshot-302_2.png"
              title="Fastrack Clone"
              description="Clone of website fastrack ,Fastrack is leading brand of India and sub brand of titan, you can shop multiple product of fastrack like watches, perfumes, goggles"
              tech="Tech-Stacks"
              techD=" HTML | CSS | Javascript | React | Node.js"
              link="https://graceful-paprenjak-4dc123.netlify.app/"
              a="https://github.com/ayushi8855/fastrack.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;