import { Container, Row, Col } from "react-bootstrap";
import './aboutme.css';

function AboutMe() {
    return(
        <div className="main_div">
            <Container className="aboutme_container">
                <Row>
                    <Col><h1>About me</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Full Stack Developer with 5+ years of experience building scalable web apps using React,
                            TypeScript, and Python. Skilled in designing robust APIs, implementing CI/CD pipelines, and writing
                            frontend/backend tests. Currently pursuing MSc in Cloud Engineering, with a strong focus on
                            sustainable and mission-critical software solutions. Passionate about delivering clean, testable code
                            and contributing to collaborative, agile teams.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;