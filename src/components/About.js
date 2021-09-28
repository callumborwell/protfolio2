import React from 'react';
import me__bg from '../assets/img/about/about-me-bg--lg.jpg';
import '../css/about.css';
import { FaAngleDown } from 'react-icons/fa';
import SocialBlock from './SocialBlock';

const About = () => (
    <section id='about'>

        <img alt='background' id='about-bg-img' src={me__bg} />

        <div id="about-overlay"></div>

        <div id='about-content' className='container'>
            <div className='row justify-center lg:justify-start'>
                <div className='col-12 col-md-10 col-lg-6'>
                    <div className='about-me__content'>
                        <h1>Hello!</h1>
                        <p className='p-subheading'>My name is <strong className='fw-semibold'>Callum Borwell</strong>.</p>
                        <p>I'm exploring <strong>front-end development</strong> and have a focus in topics relating to UI (semantics, accessibility, ergonomy, SEO, performance, responsive, graphic design, etc.).</p>
                        <p>My current work is in <strong>test analysis</strong> and <strong>test automation</strong>.</p>
                    </div>
                    <div className='about-me__content mt'>
                        <p>I'm fascinated by <strong>HTML</strong> and <strong>CSS</strong>, which have simple foundations but a wide library of edge-case functions that can be used to optimize code and solve goals in different ways.</p>
                        <p>As I learn those foundations, I do my best to build on best practice principles for scalability and optimization.</p>
                    </div>

                    <div className='text-center mt'>
                        <a href="#skills" id="arrow-down" title='See my skill set' className="smooth-scroll btn btn-primary btn-large btn-rounded">
                            <FaAngleDown />
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <SocialBlock/>

    </section>
)

export default About;