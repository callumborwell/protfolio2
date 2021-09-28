import React from 'react';
import STUDYS from '../data/study';
import '../css/study.css';

const Study = props => {
    const { image, title, subheading, description, link } = props.study;

    return (
        <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-left text-sm-center'>
            <img src={image} alt={title} />
            <div className='study text-left mt-4 mb-4'>
                <div className='study-title'>{title}</div>
                <div className='study-sub'>{subheading}</div>
                <p>{description}</p>
                <div className='text-center'>
                    <a href={link} title={subheading} className="btn btn-primary btn-large btn-rounded demo-nav">
                        Explore
                    </a>
                </div>
            </div>
        </div>
    )
}

const Studys = () => (
    <section id='study'>

        <div className='construction-tape'></div>
        <div className='construction-tape'></div>

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

        <div className='construction-tape'></div>
    </section>
)

export default Studys;