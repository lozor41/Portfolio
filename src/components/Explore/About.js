import { FiChevronRight } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegFileCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { BsAward } from "react-icons/bs";

export default function About() {
    return (
        <div className="about-container">
            <p className="me-text">Me?</p>
            <h3>LET'S GET TO KNOW ME</h3>
            <h4>Role / Role / Role</h4>
            <p className="small-d">My journey in technology started with a passion for problem-solving and creativity. Over time, I've developed expertise in various technologies and skills, always eager to take on new challenges to grow and innovate.</p>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <ul className="m-0">
                        <li>
                            <FiChevronRight /><b>Name:</b> Maher Ahmed Ali
                        </li>
                        <li>
                            <FiChevronRight /><b>Email: </b>
                            <a href="mailto:0maherahmed@gmail.com">0maherahmed@gmail.com</a>
                        </li>
                        <li>
                            <FiChevronRight /><b>Degree:</b> Bachelor's degree in Computer Science
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12">
                    <ul className="m-0">
                        <li>
                            <FiChevronRight /><b>Languages:</b> Arabic / English
                        </li>
                        <li>
                            <FiChevronRight /><b>City:</b> Cairo, Egypt
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