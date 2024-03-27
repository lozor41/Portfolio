import { Circle } from 'rc-progress';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logohtml from '../assets/HTML5_logo.svg.png'
import logocss from '../assets/CSS-Logo.png'
import logosass from '../assets/Sass_Logor.svg.png'
import logojs from '../assets/js-logo.png'
import logoreact from '../assets/reactlogo.webp'
import logoredux from '../assets/reduxlogo.png'

export default function Skills() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1192,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='skills'>
            <div className="container">
                <div className='skills-container'>
                    <h2>Compétences</h2>
                    <p>Voici une visualisation de mes compétences sur differents languages/outils de programations et framwork que j'ai obtenue au cours cette dernière année.</p>
                    <div className='skills-slider'>
                        <Slider {...settings}>
                            <div className="item">
                                <div className='cir-bar cir-bar-size'>
                                    <h3>95%</h3>
                                    <Circle
                                        percent={95}
                                        strokeLinecap="round"
                                        strokeWidth={5}
                                        trailWidth={5}
                                        trailColor='#12141D'
                                        strokeColor={{
                                            '0%': '#10E956',
                                            '50%': '#6841C8',
                                            '100%': '#9C74FF',
                                        }}
                                    />
                                </div>
                                <p><img src={logohtml} alt='html'className='logoskill'></img></p>
                            </div>
                            <div className="item">
                                <div className='cir-bar cir-bar-size'>
                                    <h3>90%</h3>
                                    <Circle
                                        percent={90}
                                        strokeLinecap="round"
                                        strokeWidth={5}
                                        trailWidth={5}
                                        trailColor='#12141D'
                                        strokeColor={{
                                            '0%': '#10E956',
                                            '50%': '#6841C8',
                                            '100%': '#9C74FF',
                                        }}
                                    />
                                </div>
                                <p><img src={logocss} alt='css'className='logoskill'></img></p>
                            </div>
                            <div className="item">
                                <div className='cir-bar cir-bar-size'>
                                    <h3>85%</h3>
                                    <Circle
                                        percent={85}
                                        strokeLinecap="round"
                                        strokeWidth={5}
                                        trailWidth={5}
                                        trailColor='#12141D'
                                        strokeColor={{
                                            '0%': '#10E956',
                                            '50%': '#6841C8',
                                            '100%': '#9C74FF',
                                        }}
                                    />
                                </div>
                                <p><img src={logosass} alt='sass'className='logoskill'></img></p>
                            </div>
                            <div className="item">
                                <div className='cir-bar cir-bar-size'>
                                    <h3>80%</h3>
                                    <Circle
                                        percent={80}
                                        strokeLinecap="round"
                                        strokeWidth={5}
                                        trailWidth={5}
                                        trailColor='#12141D'
                                        strokeColor={{
                                            '0%': '#10E956',
                                            '50%': '#6841C8',
                                            '100%': '#9C74FF',
                                        }}
                                    />
                                </div>
                                <p><img src={logojs} alt='js'className='logoskill'></img></p>
                            </div>
                            <div className="item">
                                <div className='cir-bar cir-bar-size'>
                                    <h3>80%</h3>
                                    <Circle
                                        percent={80}
                                        strokeLinecap="round"
                                        strokeWidth={5}
                                        trailWidth={5}
                                        trailColor='#12141D'
                                        strokeColor={{
                                            '0%': '#10E956',
                                            '50%': '#6841C8',
                                            '100%': '#9C74FF',
                                        }}
                                    />
                                </div>
                                <p><img src={logoreact} alt='react'className='logoskill'></img></p>
                            </div>
                            <div className="item">
                                <div className='cir-bar cir-bar-size'>
                                    <h3>75%</h3>
                                    <Circle
                                        percent={75}
                                        strokeLinecap="round"
                                        strokeWidth={5}
                                        trailWidth={5}
                                        trailColor='#12141D'
                                        strokeColor={{
                                            '0%': '#10E956',
                                            '50%': '#6841C8',
                                            '100%': '#9C74FF',
                                        }}
                                    />
                                </div>
                                <p><img src={logoredux} alt='redux'className='logoskill'></img></p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section >
    )
}