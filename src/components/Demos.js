import React from 'react';
import DEMOS from '../data/demos';
import '../css/demos.css';

const Demo = props => {
    const { image, title, subheading, description, link, linktext } = props.demo;

    return (
        <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-left text-sm-center'>
            <img src={image} alt={title} />
            <div className='demo text-left mt-4 mb-4'>
                <div className='demo-title'>{title}</div>
                <div className='demo-sub'>{subheading}</div>
                <p>{description}</p>
                <div className='text-center bot-button'>
                    <a href={link} title={linktext} className="btn btn-primary btn-large btn-rounded demo-nav">
                        {linktext}
                    </a>
                </div>
            </div>
        </div>
    )
}

const Demos = () => (
    <section id='demos'>
        <div className='top-edge'></div><div className='top-edge-cover'></div>

        <div className='section-header-box align-middle'>
            <div className='section-header-box-content'>
                Demonstration Projects
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                {
                    DEMOS.map(DEMO => (
                        <Demo key={DEMO.id} demo={DEMO} />
                    ))
                }
            </div>
        </div>

        <div className='bot-edge'></div><div className='bot-edge-cover'></div>
    </section>
)

export default Demos;