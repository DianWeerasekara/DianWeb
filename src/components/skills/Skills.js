import { Col, Container, Row } from "react-bootstrap";
import './skills.css';
import Cards from "../cards/Cards";
import reactIcon from '../../images/reactIcon.png';
import htmlIcon from '../../images/htmlIcon.png';
import cssIcon from '../../images/cssIcon.png';
import angularIcon from '../../images/angularIcon.png';
import bootstrapIcon from '../../images/bootstrapIcon.png';
import flutterIcon from '../../images/flutterIcon.png';
import ionicIcon from '../../images/ionicon.png';
import tailWindIcon from '../../images/tailwindIcon.png';
import phpIcon from '../../images/phpIcon.png';
import nodeIcon from '../../images/nodeIcon.png';
import javaScriptIcon from '../../images/javaScriptIcon.png';
import expressIcon from '../../images/express.png';
import mysqlIcon from '../../images/mysqlIcon.png';
import mongodbIcon from '../../images/mongoIcon.png';
import postgressIcon from '../../images/postgress.png';
import neo4jIcon from '../../images/neo4jIcon.png';

function Skills() {
    return(
        <div className="main_skills_container">
            <Container className="skills_container">
                <Row>
                    <Col>
                        <h1>Skills</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Frontend Skills</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Cards title="HTML" image={htmlIcon} />
                    </Col>
                    <Col>
                        <Cards title="CSS" image={cssIcon} />
                    </Col>
                    <Col>
                        <Cards title="React" image={reactIcon} />
                    </Col>
                    <Col>
                        <Cards title="Angular" image={angularIcon} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Cards title="BOOTSTRAP" image={bootstrapIcon} />
                    </Col>
                    <Col>
                        <Cards title="Flutter" image={flutterIcon}/>
                    </Col>
                    <Col>
                        <Cards title="Ionic" image={ionicIcon} />
                    </Col>
                    <Col>
                        <Cards title="Tailwind CSS" image={tailWindIcon} />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <h3>Backend Skills</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Cards title="PHP" image={phpIcon} />
                    </Col>
                    <Col>
                        <Cards title="Node" image={nodeIcon}/>
                    </Col>
                    <Col>
                        <Cards title="Express" image={expressIcon} />
                    </Col>
                     <Col>
                        <Cards title="JavaScript" image={javaScriptIcon}/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h3>Database skills</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Cards title='MySQL' image={mysqlIcon} />
                    </Col>
                    <Col>
                        <Cards title='Mongo DB' image={mongodbIcon} />
                    </Col>
                    <Col>
                        <Cards title='Postgress' image={postgressIcon} />
                    </Col>
                    <Col>
                        <Cards title='Neo 4j' image={neo4jIcon} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h3>Other skills</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Cards title={'Git'} />
                    </Col>
                    <Col>
                        <Cards title={'Agile/Scrum'} />
                    </Col>
                    <Col>
                        <Cards title={'Jest'} />
                    </Col>
                    <Col>
                        <Cards title={'Docker'} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills;