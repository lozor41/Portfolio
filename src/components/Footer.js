import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer() {
    const [newsLetterData, setNewsLetterData] = React.useState({ email: "" })

    const newsletterRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);


    React.useEffect(() => {
        if (newsletterRef.current) {
            setHeight(newsletterRef.current.clientHeight);
        }
    }, [newsletterRef]);

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleChange(event) {
        const { name, value } = event.target
        setNewsLetterData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <footer className="bg-black w-100">
            <div className="container footer-container">
                <div className="news-letter" ref={newsletterRef}
                    style={{ top: `calc(-${height / 2}px)` }}>
                    <div className="row g-3">
                        <div className="col-lg-6 col-12 ">
                            <h3>Stay updated on my latest projects and blog posts by subscribing to my newsletter!</h3>
                        </div>
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={newsLetterData.email}
                                    className='news-letter-input'
                                />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-4 col-12">
                        <Link to="/" className="navbar-brand text-white fs-1 fw-bold ps-0">LOGO</Link>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="footer-icons justify-content-md-end justify-content-start">
                            <Link className="icon">
                                <ImFacebook />
                            </Link>
                            <Link className="icon" href='https://github.com/MaherAhmed0'>
                                <FaGithub />
                            </Link>
                            <Link className="icon">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <p className="footer-text text-md-end text-start">Copyright 2024. All rights reserved by Maher Ahmed</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}