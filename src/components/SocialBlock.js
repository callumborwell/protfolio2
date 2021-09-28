import React from 'react';
import SOCIALS from '../data/socials';
import '../css/socialblock.css';

const Social = props => {
    const { icon, title, address } = props.social;

    return (
        <a href={address} title={title}>
            {icon}
        </a>
    )
}

const SocialBlock = () => (
    <div id='social-block'>

        {
            SOCIALS.map(SOCIAL => (
                <Social key={SOCIAL.id} social={SOCIAL} />
            ))
        }

    </div>
)

export default SocialBlock;