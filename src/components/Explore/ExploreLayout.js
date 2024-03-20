import { NavLink, Outlet } from "react-router-dom";

export default function ExploreLayout() {
    return (
        <section id="explore">
            <div className="container explore-section">
                <h2>Explore</h2>
                <p className="ex-p">This area is dedicated to showcasing your projects, facilitating communication with you, and providing insights into your background and vision.</p>
                <nav>
                    <ul className="explore-nav m-0 h-100 d-flex justify-content-between align-items-center list-unstyled">
                        <li><NavLink to="/"><span></span> Projects</NavLink></li>
                        <li><NavLink to="tools"><span></span> Tools</NavLink></li>
                        <li><NavLink to="about"><span></span> About</NavLink></li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </section>
    );
}
