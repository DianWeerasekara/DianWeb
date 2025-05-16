import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './myDetails.css'
import dmb from '../../images/dmb.jpg'


function MyDetails() {
    return(
        <div className='main-div-mydetails'>
            <Container className='mydetails-main-container'>
                <Row>
                    {/* Left Column with image and heading, spans 2+ rows visually */}
                    <Col md={6} className="image-col">  
                        <img src={dmb} alt="Profile" className="details-image" />
                    </Col>

                    {/* Right Column with personal details stacked vertically */}
                    <Col md={6}>
                        <Row><Col><h1>Dian Weerasekara</h1></Col></Row>
                        <Row><Col><h2>Full Stack Developer</h2></Col></Row>
                        <Row><Col><h4>+358417225598</h4></Col></Row>
                        <Row><Col><h4>dianweerasekara.dmb@gmail.com</h4></Col></Row>
                        <Row><Col><h4>Software Engineer | Full Stack Developer | Enthusiastic Learner of New Technologies</h4></Col></Row>
                        <Row>
                            <Col>
                                <a href="/path/to/your-cv.pdf" download className="btn btn-primary mt-3">
                                    Download CV
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyDetails;