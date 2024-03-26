import React from 'react'
import homeImg from '../assets/Pierrerond512.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export default function Home() {
    const [text] = useTypewriter({
        words: ['Pierre Delvacque', 'Developpeur Front-end'],
        loop: {},
        typeSpeed: 60
    })

    return (
        <main id='home'>
            <div className='container'>
                <div className='row g-3'>
                    <div className='col-lg-8 col-12'>
                        <div className='main-text'>
                            <span className='welcome'>Bienvenue dans mon portfolio</span>
                            <h1>Hey! Je suis <br />
                                <span> {text}</span>
                                <span><Cursor /></span>
                            </h1>
                            <p className='mt-4'>
                                Je suis nouveau dans le monde du développement web, étant un ancien paysagiste en reconversion j'ai une vision et un point de vue différent, étant aussi passionné de technologies et du monde du web c'était donc normal pour moi de me diriger vers cet vois.
                            </p>
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