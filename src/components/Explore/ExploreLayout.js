import { NavLink, Outlet } from "react-router-dom";

export default function ExploreLayout() {
    return (
        <section id="explore">
            <div className="container explore-section">
                <h2>Projets</h2>
                <p className="ex-p"> Voici ici quelques projets que j'ai déjà réalisé au cours de ma formation.</p>
                <nav>
                    <ul className="explore-nav m-0 h-100 d-flex justify-content-between align-items-center list-unstyled">
                        <li><NavLink to="/"><span></span> Projets</NavLink></li>
                        <li><NavLink to="about"><span></span> A propos</NavLink></li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </section>
    );
}
