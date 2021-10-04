import React from 'react';
import SKILLS from '../data/skills';
import '../css/skills.css';
import Zoom from 'react-reveal/Zoom';

const Skill = props => {
    const { icon, title, desc } = props.project;

    return (
        <Zoom cascade>
        <div className='skill col-12 col-sm-6 col-md-6 col-lg-3 text-left text-sm-center'>
            <div className='mb-1 ico'>{icon}</div>
            <div className='skill-title mb-3'>{title}</div>
            <p>{desc}</p>
        </div>
        </Zoom>
    )
}

const Skills = () => (
    <section id='skills'>
        <div className='section-header'>Front-End Skills</div>
        <div className='container'>
            <div className='row'>
                {
                    SKILLS.map(SKILL => {
                        return (
                            <Skill key={SKILL.id} project={SKILL} />
                        );
                    })
                }
            </div>
        </div>
    </section>
)

export default Skills;