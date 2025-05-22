import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './topbar.css'
import logo from '../../images/dlogo.png';

function Topbar () {
    return(
       <Navbar className="bg-primary fixed-top">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className='brand-name'>Dian Weerasekara</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Topbar;