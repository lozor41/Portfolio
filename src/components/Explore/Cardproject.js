import React from "react"
import p4 from "../../assets/p4.webp"
import css from "../../assets/CSS-Logo.png"


const ProjectCard = ({ data }) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="project-item">
                <img src={p4} alt="" className="img-fluid" />
                <div className="project-details">
                    <h4>{data.title}</h4>
                    <p><img src={data.logo} alt="logo html" className='logo-project'></img><img src={css} alt='logo css' className='logo-project'></img></p>
                    <div className='button-project'>
                        <a href={data.github} className="btn">
                            Github
                        </a>
                        <a href={data.site} className="btn">
                            Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ProjectCard