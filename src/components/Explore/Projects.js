import p4 from '../../assets/p4.webp'
import p5 from '../../assets/p5.webp'
import p10 from '../../assets/p10.webp'
import p2 from '../../assets/p2.webp'
import p3 from '../../assets/p3.webp'
import p8 from '../../assets/p8.webp'
import css from '../../assets/CSS-Logo.png'
import js from '../../assets/js-logo.png'
import html from '../../assets/HTML5_logo.svg.png'
import sass from '../../assets/Sass_Logor.svg.png'
import react_logo from '../../assets/reactlogo.webp'

export default function Projects() {
    return (
        <div className="row g-4 mt-3">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p4} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>OhMyFood</h4>
                        <p><img src={html} alt="logo html" className='logo-project'></img><img src={css} alt='logo css' className='logo-project'></img></p>
                        <div className='button-project'>
                        <a href='https://github.com/lozor41/Ohmyfood-DP.git' className="btn">
                            Github
                        </a>
                        <a href='https://lozor41.github.io/Ohmyfood-DP/' className="btn">
                            Site
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p5} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Print'it</h4>
                        <p><img src={js} alt='logo js' className='logo-project'></img></p>
                        <div className='button-project'>
                        <a href='https://github.com/lozor41/Print-it.git' className="btn">
                            Github
                        </a>
                        <a href='https://lozor41.github.io/Print-it/' className="btn">
                            Site
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p10} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>724 Event</h4>
                        <p><img src={js} alt='logo js' className='logo-project'></img><img src={react_logo} alt='logo react' className='logo-project'></img></p>
                        <div className='button-project'>
                        <a href='https://github.com/lozor41/Projet10-724event.git' className="btn">
                            Github
                        </a>
                        <a href='https://lozor41.github.io/Projet10-724event/' className="btn">
                            Site
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p2} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Riding Cities</h4>
                        <p><img src={html} alt="logo html" className='logo-project'></img></p>
                        <div className='button-project'>
                        <a href='https://github.com/lozor41/https---github.com-lozor41-RingCities-P2.git' className="btn">
                            Github
                        </a>
                        <a href='https://lozor41.github.io/https---github.com-lozor41-RingCities-P2/' className="btn">
                            Site
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p3} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Booki</h4>
                        <p><img src={html} alt="logo html" className='logo-project'></img><img src={css} alt='logo css' className='logo-project'></img></p>
                        <div className='button-project'>
                        <a href='https://github.com/lozor41/Booki-P3.git' className="btn">
                            Github
                        </a>
                        <a href='https://lozor41.github.io/Booki-P3/' className="btn">
                            Site
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p8} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Kasa</h4>
                        <p><img src={sass} alt="logo sass" className='logo-project'></img><img src={react_logo} alt='logo react' className='logo-project'></img></p>
                        <div className='button-project'>
                        <a href='https://github.com/lozor41/Projet-8.git' className="btn">
                            Github
                        </a>
                        <a href='https://lozor41.github.io/Projet-8/' className="btn">
                            Site
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}