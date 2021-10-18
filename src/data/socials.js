import { FaInstagramSquare, FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const SOCIALS = [
    {
        id:1,
        icon:<FaLinkedin/>,
        title:'LinkedIn',
        address:'https://www.linkedin.com/in/callum-borwell'
    },
    {
        id:2,
        icon:<FaGithub/>,
        title:'GitHub',
        address:'https://github.com/callumborwell'
    },
    {
        id:3,
        icon:<FaInstagramSquare/>,
        title:'Instagram',
        address:'https://www.instagram.com/dapperboar/'
    },
    {
        id:4,
        icon:<FaCodepen/>,
        title:'Codepen',
        address:'https://codepen.io/collection/rxaeMv'
    },
    {
        id:5,
        icon:<GrMail/>,
        title:'Mail',
        address:'mailto:callum.borwell@gmail.com'
    },
];

export default SOCIALS;