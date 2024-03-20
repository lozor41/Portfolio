import React from 'react';
import imgConnect from '../assets/connect.svg'
import { useInView } from 'react-intersection-observer';

export default function Connect() {
    const [connectFormData, setConnectFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const { ref, inView } = useInView({
        threshold: 0,
    });

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(connectFormData)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setConnectFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <section id='connect'>
            <div className='container'>
                <div className="row g-3">
                    <div className="col-lg-6 col-12 px-3">
                        <figure className='d-flex align-items-center'>
                            <img src={imgConnect} alt="" ref={ref}
                                className={`img-fluid ${inView ? 'scale-up-center' : 'connect-img'}`} />
                        </figure>
                    </div>
                    <div className="col-lg-6 col-12 px-3">
                        <div className='form-container'>
                            <h2 className='connect-header'>GET IN TOUCH</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-lg-6 col-12'>
                                        <input
                                            name="name"
                                            onChange={handleChange}
                                            type="name"
                                            placeholder="Your Name"
                                            value={connectFormData.name}
                                            className='connect-input'
                                        />
                                    </div>
                                    <div className='col-lg-6 col-12'>
                                        <input
                                            name="email"
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="Your Email"
                                            value={connectFormData.email}
                                            className='connect-input'
                                        />
                                    </div>
                                </div>
                                <input
                                    name="subject"
                                    onChange={handleChange}
                                    type="subject"
                                    placeholder="Subject"
                                    value={connectFormData.subject}
                                    className='connect-input'
                                />
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    type="message"
                                    placeholder="Message"
                                    value={connectFormData.message}
                                    rows={4}
                                    className='connect-input'>
                                </textarea>
                                <button className='send-btn'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}