import React from 'react'
import homeImg from '../assets/robo-wave-removebg-preview.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { IoArrowForwardCircleOutline } from "react-icons/io5";


export default function Home() {
    const [text] = useTypewriter({
        words: ['Maher Ahmed', 'Web Developer', 'Front End Developer'],
        loop: {},
        typeSpeed: 80
    })

    return (
        <main id='home'>
            <div className='container'>
                <div className='row g-3'>
                    <div className='col-lg-8 col-12'>
                        <div className='main-text'>
                            <span className='welcome'>Welcome to my space</span>
                            <h1>Hey! I'm <br />
                                <span> {text}</span>
                                <span><Cursor /></span>
                            </h1>
                            <p className='mt-4'>
                                This is where you can add additional information about yourself or your projects. Feel free to write about your skills, experiences, or any other relevant details.
                            </p>
                            <a className='connect-span' href='#connect'>Let's Connect <IoArrowForwardCircleOutline className='arrow' /></a>
                        </div>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <figure className='d-flex justify-content-center align-align-items-center '>
                            <img src={homeImg} className='img-fluid home-img' alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </main>
    )
}