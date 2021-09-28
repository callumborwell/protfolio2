import demoCss from '../assets/img/demos/demo-css.png';
import demoSolo from '../assets/img/demos/demo-solo.png';
import demoMusic from '../assets/img/demos/demo-music.png';

const DEMOS = [
    {
        id:1,
        image:demoCss,
        title:'CSSBattle',
        subheading:'Competitive CSS coding',
        description:"CSSBattle is an online CSS Code Golfing battleground. Players from all around the world try to visually replicate targets in smallest possible CSS code and battle it out to get to the top of the leaderboard. I'm currently in top 100 of global players.",
        link:'https://cssbattle.dev/player/callum_borwell',
        linktext:'My Profile'
    },
    {
        id:2,
        image:demoSolo,
        title:'Solo',
        subheading:'HTML5, CSS3, Bootstrap, jQuery',
        description:'A responsive website project to implement HTML5, CSS3, and Bootstrap into modules applicable for several projects. Javascript and jQuery libraries add complexity to allow for smoother animation, navigation, and functionality.',
        link:'https://github.com/callumborwell/responsive-solo',
        linktext:'GitHub Source'
    },
    {
        id:3,
        image:demoMusic,
        title:'Music Master',
        subheading:'React and Spotify API',
        description:'Applied React core concepts, populating content from authenticated Spotify API in a simple search engine, including audio functions.',
        link:'/music-master',
        linktext:'Explore'
    },
];

export default DEMOS;