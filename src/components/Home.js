import React from 'react'
import homeImg from '../assets/pierrerondc.webp'
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
                            <h1>Hey ! Je suis <br />
                                <span> {text}</span>
                                <span><Cursor /></span>
                            </h1>
                            <p className='mt-4'>
                                , et nouvellement diplômé !<br />Passionné de technologies, du web et de la création, je vous met à disposition mes nouvelles compétences.<br /> Grâce à mon expérience riche et variée, notamment en tant que paysagiste, j'aborde les projets avec une vision globale.<br />L'attention du détail et son intégration dans un monde plus vaste ; n'est-ce-pas ça, le développement du web ?   
                            
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <figure className='d-flex justify-content-center align-align-items-center '>
                            <img src={homeImg} className='img-fluid home-img' alt="moi" />
                        </figure>
                    </div>
                </div>
            </div>
        </main>
    )
}