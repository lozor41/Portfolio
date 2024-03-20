import p1 from '../../assets/p7.webp'
import p2 from '../../assets/p8.webp'
import p3 from '../../assets/p9.webp'
import p4 from '../../assets/p10.webp'
import p5 from '../../assets/p11.webp'
import p6 from '../../assets/p12.webp'

export default function Projects() {
    return (
        <div className="row g-4 mt-3">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p1} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Project Name</h4>
                        <p>Design & Development</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p2} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Project Name</h4>
                        <p>Design & Development</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p3} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Project Name</h4>
                        <p>Design & Development</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p4} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Project Name</h4>
                        <p>Design & Development</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p5} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Project Name</h4>
                        <p>Design & Development</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="project-item">
                    <img src={p6} alt="" className="img-fluid" />
                    <div className="project-details">
                        <h4>Project Name</h4>
                        <p>Design & Development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}