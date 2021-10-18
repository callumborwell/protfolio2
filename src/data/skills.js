import { FaMobileAlt, FaJava, FaReact, FaPenFancy, FaAtlassian } from 'react-icons/fa';
import { BsCodeSlash, BsBraces, BsImage } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';
import { ImSvg } from 'react-icons/im';

const SKILLS = [
    {
        id:1,
        icon:<BsCodeSlash/>,
        title:'Modern and semantic HTML',
        desc:'Structure and accessability through aria-* attributes and sectioning elements.'
    },
    {
        id:2,
        icon:<BsBraces/>,
        title:'Advanced CSS',
        desc:'Creative use of different CSS tools for various effects.'
    },
    {
        id:3,
        icon:<FaMobileAlt/>,
        title:'RWD',
        desc:'Practices in responsive design. Mobile-First approach.'
    },
    {
        id:4,
        icon:<FaJava/>,
        title:'JavaScript',
        desc:'For DOM manipulation and accessibility purposes.'
    },
    {
        id:5,
        icon:<FaReact/>,
        title:'React',
        desc:'JSX framework for development with an active community of open source libraries.'
    },
    {
        id:6,
        icon:<GoBrowser/>,
        title:'Progressive Enhancement',
        desc:'Being aware of cross-browser compatibility issues.'
    },
    {
        id:7,
        icon:<FaPenFancy/>,
        title:'Visual Design',
        desc:'Creating graphical assets and art pieces as a hobby. Colour theory, aethetics, etc.'
    },
    {
        id:8,
        icon:<BsImage/>,
        title:'Working with UX tools',
        desc:'Adobe Creative Suite (Illustrator, Photoshop, Xd), Figma.'
    },
    {
        id:9,
        icon:<ImSvg/>,
        title:'SVG',
        desc:'SVG images & SVG sprite icons. Optimized with SVGO.'
    },
    {
        id:10,
        icon:<FaAtlassian/>,
        title:'Working with Atlassian tools',
        desc:'Jira, Trello, and Confluence.'
    }
];

export default SKILLS;