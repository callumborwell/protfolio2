import React from 'react';
import STUDYS from '../data/study';
import '../css/study.css';
import Slide from 'react-reveal/Slide';

const Study = props => {
    const { id, image, title, subheading, description, link, linktext } = props.study;

    return (
        <Slide left>
        <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-left text-sm-center'>
            <img src={image} alt={title} />
            <div className='study text-left mt-4 mb-4'>
                <div className='study-title'>{title}</div>
                <div className='study-sub'>{subheading}</div>
                <p>{description}</p>
                <div className='text-center'>
                    <a href={link} title={subheading} className="btn btn-primary btn-large btn-rounded demo-nav">
                        {linktext}
                    </a>
                </div>
            </div>
        </div>
        </Slide>
    )
}

const Studys = () => (
    <section id='study'>

        <Slide left><div className='construction-tape'></div></Slide>
        <Slide right><div className='construction-tape'></div></Slide>

        <div id="study-overlay"></div>

        <div className='section-header'>Under Construction</div>
        <div className='container'>
            <div className='row justify-content-center'>
                {
                    STUDYS.map(STUDY => (
                        <Study key={STUDY.id} study={STUDY} />
                    ))
                }
            </div>
        </div>

        <Slide left><div className='construction-tape'></div></Slide>
    </section>
)

export default Studys;