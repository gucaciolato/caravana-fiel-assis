import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="flex-column">
            <Navbar.Brand href="#home" className="text-center">
                Caravana <strong>Fiel</strong> Assis
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="about" smooth duration={500}>
                        Sobre Nós
                    </Nav.Link>
                    <Nav.Link as={Link} to="photos" smooth duration={500}>
                        Fotos
                    </Nav.Link>
                    <Nav.Link as={Link} to="actions" smooth duration={500}>
                        Ações
                    </Nav.Link>
                    <Nav.Link as={Link} to="partners" smooth duration={500}>
                        Parceiros
                    </Nav.Link>
                    <Nav.Link as={Link} to="contacts" smooth duration={500}>
                        Contatos
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
