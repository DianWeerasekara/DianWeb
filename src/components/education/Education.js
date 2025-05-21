import { Col, Container, Row } from "react-bootstrap";
import './education.css';
import VamkIcon from '../../images/vamk.png';
import ucscIcon from '../../images/ucsc.png';

function Education () {
    return(
       <div className="main_education_section">
            <Container className="education_container">
                <Row>
                    <Col><h1>Education</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <h4>
                            Vaasa University of Applied Sciences
                            <img 
                                src={VamkIcon} 
                                alt="Colombo Logo" 
                                className="university-logo"
                            />
                        </h4>
                        <h6>Masters in Cloud-Based Software Engineering</h6>
                        <p>2023-2024</p>
                    </Col>
                    <Col>
                        <h4>
                            University of Colombo School of Computing
                            <img 
                                src={ucscIcon} 
                                alt="Colombo Logo" 
                                className="university-logo"
                            />
                        </h4>
                        <h6>Bachelor's in Information Technology</h6>
                        <p>2017-2021</p>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
       </div>
    )
}

export default Education;