import React from "react"
import projectdata from "../../assets/containproject.json"
import { useParams } from "react-router-dom"
import p4 from "../../assets/p4.webp"
import html from "../../assets/HTML5_logo.svg.png"
import css from "../../assets/CSS-Logo.png"


const ProjectCard = () => {

    const { id } = useParams()
    const prodata = projectdata.find(prodata => prodata.id === id)
    if (prodata === undefined) {
        return <section>
            <p>Oups !!</p>
        </section>
    }
    return (
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p4} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>{prodata.title}</h4>
                        <p><img src={html} alt="logo html" className='logo-project'></img><img src={css} alt='logo css' className='logo-project'></img></p>
                        <div className='button-project'>
                        <a  href={prodata.github} className="btn">
                            Github
                        </a>
                        <a href={prodata.site} className="btn">
                            Site
                        </a>
                        </div>
                    </div>
                </div>
            </div>
)
    }




export default ProjectCard