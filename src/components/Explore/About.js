import { FiChevronRight } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegFileCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { BsAward } from "react-icons/bs";

export default function About() {
    return (
        <div className="about-container">
            <p className="me-text">Moi?</p>
            <h3>A PROPOS DE MOI</h3>
            <h4>Developpeur Front-End</h4>
            <p className="small-d">My journey in technology started with a passion for problem-solving and creativity. Over time, I've developed expertise in various technologies and skills, always eager to take on new challenges to grow and innovate.</p>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <ul className="m-0">
                        <li>
                            <FiChevronRight /><b>Nom:</b> DELVACQUE Pierre
                        </li>
                        <li>
                            <FiChevronRight /><b>Email: </b>
                            <a href="mailto:pierre-8992@outlook.fr">pierre-8992@outlook.fr</a>
                        </li>
                        <li>
                            <FiChevronRight /><b>Statut:</b> Devoleppeur Front end
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12">
                    <ul className="m-0">
                        <li>
                            <FiChevronRight /><b>Languages:</b> French / English
                        </li>
                        <li>
                            <FiChevronRight /><b>Pays:</b> France
                        </li>
                        <li>
                            <FiChevronRight /><b>Freelance:</b> Available
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="counts">
                        <span><BsEmojiSmile /></span>
                        <h5>38</h5>
                        <h6>Happy Clients</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="counts">
                        <span><FaRegFileCode /></span>
                        <h5>48</h5>
                        <h6>Projects</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="counts">
                        <span><FaCode /></span>
                        <h5>4</h5>
                        <h6>Coding Hours</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="counts">
                        <span><BsAward /></span>
                        <h5>18</h5>
                        <h6>Awards</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}