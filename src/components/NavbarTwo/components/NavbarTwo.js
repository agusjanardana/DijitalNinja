import { Nav, Navbar, Container } from 'react-bootstrap';
import './css/index.css';

const NavbarTwos = () => {
    return (
        <Navbar className="navbar-two-wrapper" expand="lg">
            <Container>
                <Navbar.Brand className="navbar-two-wrapper-title" href="#home">
                    DIJITALNINJA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center nav-item-abc" id="basic-navbar-nav-two">
                    <Nav className="position-absolute nav-two-wrapper">
                        <Nav.Link className="text-link" href="/home">
                            Design
                        </Nav.Link>
                        <Nav.Link className="text-link" href="link-1">
                            UI/UX
                        </Nav.Link>
                        <Nav.Link className="text-link" href="link-2">
                            Coder
                        </Nav.Link>
                        <Nav.Link className="text-link" href="link-2">
                            Translating
                        </Nav.Link>
                        <Nav.Link className="text-link" href="link-2">
                            Video Editor
                        </Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end last-link">
                        <Nav.Link>
                            <button>List Your Job</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarTwos;
