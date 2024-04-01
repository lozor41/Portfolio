import { FiChevronRight } from "react-icons/fi";

export default function About() {
    return (
        <div className="about-container">
            <p className="me-text">Moi ?</p>
            <p className="lign-me">____________</p>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <ul className="m-0">
                        <li>
                            <FiChevronRight /><b>Nom :</b> DELVACQUE Pierre
                        </li>
                        <li>
                            <FiChevronRight /><b>Email : </b>
                            <a href="mailto:pierre-8992@outlook.fr">pierre-8992@outlook.fr</a>
                        </li>
                        <li>
                            <FiChevronRight /><b>Statut :</b> Integrateur Front-end
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12">
                    <ul className="m-0">
                        <li>
                            <FiChevronRight /><b>Languages :</b> French / English
                        </li>
                        <li>
                            <FiChevronRight /><b>Pays :</b> France
                        </li>
                        <li>
                            <FiChevronRight /><b>Freelance :</b> Available
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}