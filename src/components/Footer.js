import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Footer() {
    const newsletterRef = React.useRef(null);
    const [setHeight] = React.useState(0);


    React.useEffect(() => {
        if (newsletterRef.current) {
            setHeight(newsletterRef.current.clientHeight);
        }
    },);

    return (
        <footer className="bg-black w-100">
            <div className="container footer-container">
                <div className="row g-3">
                    <div className="col-md-4 col-12">
                        <Link to="/" className="navbar-brand text-white fs-1 fw-bold ps-0">LOGO</Link>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="footer-icons justify-content-md-end justify-content-start">
                        <Nav.Link className="icon" href='https://github.com/lozor41'>
                                <FaGithub />
                            </Nav.Link>
                            <Link className="icon">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}