import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";


export default function Header() {
    const [activeLink, setActiveLink] = React.useState('home')
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    function linkClick(value) {
        return setActiveLink(value)
    }
    return (
        <header className={scrolled ? "scrolled-header sticky-top" : "sticky-top"}>
            <Navbar expand="lg" className="navbar">
                <Container className="py-lg-1 py-sm-1 d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand text-white fs-1 fw-bold">LOGO</Link>
                    <Navbar.Toggle aria-controls="navbarCollapse" style={{ color: 'white' }}>
                        <FaBars className="menu-icon" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="ms-auto navigation">
                            <Nav.Link
                                className={activeLink === 'home' ? "active links" : "links"}
                                href="#home"
                                onClick={() => linkClick('home')}>
                                Home
                            </Nav.Link>
                            <Nav.Link
                                className={activeLink === 'skills' ? "active links" : "links"}
                                href="#skills"
                                onClick={() => linkClick('skills')}>
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                className={activeLink === 'explore' ? "active links" : "links"}
                                href="#explore"
                                onClick={() => linkClick('explore')}>
                                Explore
                            </Nav.Link>
                        </Nav>
                        <Nav className="social-icons">
                            <Nav.Link className="icon">
                                <ImFacebook />
                            </Nav.Link>
                            <Nav.Link className="icon" href='https://github.com/MaherAhmed0'>
                                <FaGithub />
                            </Nav.Link>
                            <Nav.Link className="icon">
                                <FaLinkedinIn />
                            </Nav.Link>
                        </Nav>
                        <Nav.Link className="connect-btn" href="#connect">Let's Connect</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}