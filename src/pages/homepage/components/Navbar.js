import { Nav, Navbar, Container } from 'react-bootstrap';
import './css/index.css';

const NavbarHomepage = () => {
    return (
        <Navbar className="navbar-wrapper" expand="lg">
            <Container>
                <Navbar.Brand className="navbar-wrapper-title text-white" href="#home">
                    DIJITALNINJA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end nav-item-ab" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Freelencer List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Listing Job</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarHomepage;
