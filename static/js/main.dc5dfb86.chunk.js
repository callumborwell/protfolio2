(this.webpackJsonpprotfolio2=this.webpackJsonpprotfolio2||[]).push([[0],{48:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var i=s(2),c=s(21),n=s.n(c),a=s(41),r=s(5),l=s(16),o=s(17),d=s(19),j=s(18),b=s(69),u=s(67),h=s(68),m=(s(48),s(1)),p=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={topOfPage:"top"},e.listenScrollEvent=function(t){window.scrollY>10?e.setState({topOfPage:"nottop"}):e.setState({topOfPage:"top"})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return Object(m.jsx)(b.a,{collapseOnSelect:!0,expand:"md",fixed:"top",className:this.state.topOfPage,children:Object(m.jsxs)(u.a,{children:[Object(m.jsxs)(b.a.Brand,{href:"#about",children:[Object(m.jsx)("p",{children:"callum "}),"BORWELL"]}),Object(m.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsxs)(h.a,{className:"me-auto",children:[Object(m.jsx)(h.a.Link,{href:"#about",children:"About"}),Object(m.jsx)(h.a.Link,{href:"#skills",children:"Skills"}),Object(m.jsx)(h.a.Link,{href:"#demos",children:"Projects"}),Object(m.jsx)(h.a.Link,{href:"#study",children:"Study"}),Object(m.jsx)(h.a.Link,{href:"#contacts",children:"Contacts"})]})})]})})}}]),s}(i.Component),x=s.p+"static/media/about-me-bg--lg.73974550.jpg",O=(s(54),s(10)),f=s(39),g=[{id:1,icon:Object(m.jsx)(O.f,{}),title:"LinkedIn",address:"https://www.linkedin.com/in/callum-borwell"},{id:2,icon:Object(m.jsx)(O.c,{}),title:"GitHub",address:"https://github.com/callumborwell"},{id:3,icon:Object(m.jsx)(O.d,{}),title:"Instagram",address:"https://www.instagram.com/dapperboar/"},{id:4,icon:Object(m.jsx)(f.a,{}),title:"Mail",address:"mailto:callum.borwell@gmail.com"}],v=(s(55),function(e){var t=e.social,s=t.icon,i=t.title,c=t.address;return Object(m.jsx)("a",{href:c,title:i,children:s})}),y=function(){return Object(m.jsx)("div",{id:"social-block",children:g.map((function(e){return Object(m.jsx)(v,{social:e},e.id)}))})},w=function(){return Object(m.jsxs)("section",{id:"about",children:[Object(m.jsx)("img",{alt:"background",id:"about-bg-img",src:x}),Object(m.jsx)("div",{id:"about-overlay"}),Object(m.jsx)("div",{id:"about-content",className:"container",children:Object(m.jsx)("div",{className:"row justify-center lg:justify-start",children:Object(m.jsxs)("div",{className:"col-12 col-md-10 col-lg-6",children:[Object(m.jsxs)("div",{className:"about-me__content",children:[Object(m.jsx)("h1",{children:"Hello!"}),Object(m.jsxs)("p",{className:"p-subheading",children:["My name is ",Object(m.jsx)("strong",{className:"fw-semibold",children:"Callum Borwell"}),"."]}),Object(m.jsxs)("p",{children:["I'm exploring ",Object(m.jsx)("strong",{children:"front-end development"})," and have a focus in topics relating to UI (semantics, accessibility, ergonomy, SEO, performance, responsive, graphic design, etc.)."]}),Object(m.jsxs)("p",{children:["My current work is in ",Object(m.jsx)("strong",{children:"test analysis"})," and ",Object(m.jsx)("strong",{children:"test automation"}),"."]})]}),Object(m.jsxs)("div",{className:"about-me__content mt",children:[Object(m.jsxs)("p",{children:["I'm fascinated by ",Object(m.jsx)("strong",{children:"HTML"})," and ",Object(m.jsx)("strong",{children:"CSS"}),", which have simple foundations but a wide library of edge-case functions that can be used to optimize code and solve goals in different ways."]}),Object(m.jsx)("p",{children:"As I learn those foundations, I do my best to build on best practice principles for scalability and optimization."})]}),Object(m.jsx)("div",{className:"text-center mt",children:Object(m.jsx)("a",{href:"#skills",id:"arrow-down",title:"See my skill set",className:"smooth-scroll btn btn-primary btn-large btn-rounded",children:Object(m.jsx)(O.a,{})})})]})})}),Object(m.jsx)(y,{})]})},k=s(25),N=s(40),S=[{id:1,icon:Object(m.jsx)(k.b,{}),title:"Modern and semantic HTML",desc:"Structure and accessability through aria-* attributes and sectioning elements."},{id:2,icon:Object(m.jsx)(k.a,{}),title:"Advanced CSS",desc:"Creative use of different CSS tools for various effects."},{id:3,icon:Object(m.jsx)(O.g,{}),title:"RWD",desc:"Practices in responsive design. Mobile-First approach."},{id:4,icon:Object(m.jsx)(O.e,{}),title:"JavaScript",desc:"For DOM manipulation and accessibility purposes."},{id:5,icon:Object(m.jsx)(O.i,{}),title:"React",desc:"Open Source Front-End JavaScript libraries."},{id:6,icon:Object(m.jsx)(N.a,{}),title:"Progressive Enhancement",desc:"Being aware of cross-browser compatibility issues."},{id:7,icon:Object(m.jsx)(O.h,{}),title:"Visual Design",desc:"Creating graphical assets and art pieces as a hobby. Colour theory, aethetics, etc."},{id:8,icon:Object(m.jsx)(k.c,{}),title:"Working with UX tools",desc:"Adobe Creative Suite (Illustrator, Photoshop, Xd), Figma."},{id:9,icon:Object(m.jsx)(O.b,{}),title:"Working with Atlassian tools",desc:"Jira, Trello, and Confluence."}],A=(s(56),function(e){var t=e.project,s=t.icon,i=t.title,c=t.desc;return Object(m.jsxs)("div",{className:"skill col-12 col-sm-6 col-md-6 col-lg-3 text-left text-sm-center",children:[Object(m.jsx)("div",{className:"mb-1 ico",children:s}),Object(m.jsx)("div",{className:"skill-title mb-3",children:i}),Object(m.jsx)("p",{children:c})]})}),C=function(){return Object(m.jsxs)("section",{id:"skills",children:[Object(m.jsx)("div",{className:"section-header",children:"Front-End Skills"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:S.map((function(e){return Object(m.jsx)(A,{project:e},e.id)}))})})]})},P=[{id:1,image:s.p+"static/media/demo-css.3b563ee8.png",title:"CSSBattle",subheading:"Competitive CSS coding",description:"CSSBattle is an online CSS Code Golfing battleground. Players from all around the world try to visually replicate targets in smallest possible CSS code and battle it out to get to the top of the leaderboard. I'm currently in top 100 of global players.",link:"https://cssbattle.dev/player/callum_borwell",linktext:"My Profile"},{id:2,image:s.p+"static/media/demo-solo.e1063d30.png",title:"Solo",subheading:"HTML5, CSS3, Bootstrap, jQuery",description:"A responsive website project to implement HTML5, CSS3, and Bootstrap into modules applicable for several projects. Javascript and jQuery libraries add complexity to allow for smoother animation, navigation, and functionality.",link:"https://github.com/callumborwell/responsive-solo",linktext:"GitHub Source"},{id:3,image:s.p+"static/media/demo-music.3bc07b6e.png",title:"Music Master",subheading:"React and Spotify API",description:"Applied React core concepts, populating content from authenticated Spotify API in a simple search engine, including audio functions.",link:"/music-master",linktext:"Explore"}],I=(s(57),function(e){var t=e.demo,s=t.image,i=t.title,c=t.subheading,n=t.description,a=t.link,r=t.linktext;return Object(m.jsxs)("div",{className:"col-12 col-sm-6 col-md-6 col-lg-4 text-left text-sm-center",children:[Object(m.jsx)("img",{src:s,alt:i}),Object(m.jsxs)("div",{className:"demo text-left mt-4 mb-4",children:[Object(m.jsx)("div",{className:"demo-title",children:i}),Object(m.jsx)("div",{className:"demo-sub",children:c}),Object(m.jsx)("p",{children:n}),Object(m.jsx)("div",{className:"text-center bot-button",children:Object(m.jsx)("a",{href:a,title:r,className:"btn btn-primary btn-large btn-rounded demo-nav",children:r})})]})]})}),M=function(){return Object(m.jsxs)("section",{id:"demos",children:[Object(m.jsx)("div",{className:"top-edge"}),Object(m.jsx)("div",{className:"top-edge-cover"}),Object(m.jsx)("div",{className:"section-header-box align-middle",children:Object(m.jsx)("div",{className:"section-header-box-content",children:"Demonstration Projects"})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:P.map((function(e){return Object(m.jsx)(I,{demo:e},e.id)}))})}),Object(m.jsx)("div",{className:"bot-edge"}),Object(m.jsx)("div",{className:"bot-edge-cover"})]})},B=[{id:1,image:s.p+"static/media/study-svg.a1aac25c.png",title:"SVG",subheading:"Sector Scalable Graphics",description:"Combining visual design with mathematical functions for enhanced UI and dynamic animations.",link:"http://www1.plurib.us/svg_gallery/"},{id:2,image:s.p+"static/media/study-threejs.4a431f31.png",title:"ThreeJS",subheading:"3D Assets Integration",description:"I have experience with 3D modelling, and plan to combine that with web design for powerful scenes.",link:"https://threejs.org/"}],L=(s(58),function(e){var t=e.study,s=t.image,i=t.title,c=t.subheading,n=t.description,a=t.link;return Object(m.jsxs)("div",{className:"col-12 col-sm-6 col-md-6 col-lg-4 text-left text-sm-center",children:[Object(m.jsx)("img",{src:s,alt:i}),Object(m.jsxs)("div",{className:"study text-left mt-4 mb-4",children:[Object(m.jsx)("div",{className:"study-title",children:i}),Object(m.jsx)("div",{className:"study-sub",children:c}),Object(m.jsx)("p",{children:n}),Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("a",{href:a,title:c,className:"btn btn-primary btn-large btn-rounded demo-nav",children:"Explore"})})]})]})}),E=function(){return Object(m.jsxs)("section",{id:"study",children:[Object(m.jsx)("div",{className:"construction-tape"}),Object(m.jsx)("div",{className:"construction-tape"}),Object(m.jsx)("div",{id:"study-overlay"}),Object(m.jsx)("div",{className:"section-header",children:"Under Construction"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:B.map((function(e){return Object(m.jsx)(L,{study:e},e.id)}))})}),Object(m.jsx)("div",{className:"construction-tape"})]})},D=(s(59),function(){return Object(m.jsx)("footer",{className:"text-center",role:"contentinfo",id:"contacts","aria-labelledby":"footer-title",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("aside",{className:"row justify-content-center py-3 md:pt-4 lg:pt-5",role:"complementary",children:[Object(m.jsx)("div",{class:"col-12 mb-0.5 lg:mb-1 lg:mt-2",children:Object(m.jsx)("div",{className:"section-header-box align-middle",children:Object(m.jsxs)("div",{className:"section-header-box-content",children:["Find Me On",Object(m.jsx)("span",{className:"sr-only",children:" the following networks"})]})})}),Object(m.jsx)("div",{className:"col-auto mt mb-0",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/callum-borwell",title:"LinkedIn","aria-describedby":"new-window",rel:"noopener noreferrer",children:Object(m.jsx)(O.f,{})})}),Object(m.jsx)("div",{class:"col-auto mt mb-0",children:Object(m.jsx)("a",{href:"https://www.instagram.com/dapperboar/",title:"Instagram","aria-describedby":"new-window",rel:"noopener noreferrer",children:Object(m.jsx)(O.d,{})})}),Object(m.jsx)("div",{class:"col-auto mt mb-0",children:Object(m.jsx)("a",{href:"https://github.com/callumborwell",title:"GitHub","aria-describedby":"new-window",rel:"noopener noreferrer",children:Object(m.jsx)(O.c,{})})})]}),Object(m.jsx)("h2",{class:"sr-only",children:"Useful links"}),Object(m.jsxs)("div",{class:"row fs-4 justify-content-center contact-bottom",children:[Object(m.jsxs)("div",{class:"col-auto",children:["My email address : ",Object(m.jsx)("a",{href:"mailto:callum.borwell@gmail.com",children:"callum.borwell@gmail.com"})]}),Object(m.jsx)("div",{class:"col-auto px-0 text-primary-light","aria-hidden":"true",children:"\u2022"}),Object(m.jsxs)("div",{class:"col-auto",children:["Source code on ",Object(m.jsx)("a",{href:"",rel:"noopener noreferrer",children:"GitHub"})]})]})]})})}),U=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={displayBio:!1},e.toggleDisplayBio=function(){e.setState({displayBio:!e.state.displayBio})},e}return Object(o.a)(s,[{key:"render",value:function(){this.state.displayBio,this.toggleDisplayBio;return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)(w,{}),Object(m.jsx)(C,{}),Object(m.jsx)(M,{}),Object(m.jsx)(E,{}),Object(m.jsx)(D,{})]})}}]),s}(i.Component),H=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={artistQuery:""},e.updateArtistQuery=function(t){console.log("event.target.value",t.target.value),e.setState({artistQuery:t.target.value})},e.handleKeyPress=function(t){"Enter"===t.key&&e.searchArtist()},e.searchArtist=function(){e.props.searchArtist(e.state.artistQuery)},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{onChange:this.updateArtistQuery,onKeyPress:this.handleKeyPress,placeholder:"Search for an Artist"}),Object(m.jsx)("button",{onClick:this.searchArtist,children:"Search"})]})}}]),s}(i.Component),_=function(e){var t=e.artist;if(!t)return null;var s=t.images,i=t.name,c=t.followers,n=t.genres;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:i}),Object(m.jsxs)("p",{children:[c.total," followers"]}),Object(m.jsx)("p",{children:n.join(", ")}),Object(m.jsx)("img",{src:s[0]&&s[0].url,alt:"artist-profile",style:{width:200,height:200,borderRadius:100,objectFit:"cover"}})]})},F=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={playing:!1,audio:null,playingPreviewUrl:null},e.playAudio=function(t){return function(){var s=new Audio(t);e.state.playing?(e.state.audio.pause(),e.state.playingPreviewUrl===t?e.setState({playing:!1}):(s.play(),e.setState({audio:s,playingPreviewUrl:t}))):(s.play(),e.setState({playing:!0,audio:s,playingPreviewUrl:t}))}},e.trackIcon=function(t){return t.preview_url?e.state.playing&&e.state.playingPreviewUrl===t.preview_url?Object(m.jsx)("span",{children:"| |"}):Object(m.jsx)("span",{children:"\u25b6"}):Object(m.jsx)("span",{children:"N/A"})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.props.tracks;return Object(m.jsx)("div",{children:t.map((function(t){var s=t.id,i=t.name,c=t.album,n=t.preview_url;return Object(m.jsxs)("div",{onClick:e.playAudio(n),className:"track",children:[Object(m.jsx)("img",{src:c.images[0].url,alt:"track-image",className:"track-image"}),Object(m.jsx)("p",{className:"track-text",children:i}),Object(m.jsx)("p",{className:"track-icon",children:e.trackIcon(t)})]},s)}))})}}]),s}(i.Component),G="https://spotify-api-wrapper.appspot.com",J=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={artist:null,tracks:[]},e.searchArtist=function(t){console.log("this.state",e.state),fetch("".concat(G,"/artist/").concat(t)).then((function(e){return e.json()})).then((function(t){if(console.log("json",t),t.artists.total>0){var s=t.artists.items[0];e.setState({artist:s}),fetch("".concat(G,"/artist/").concat(s.id,"/top-tracks")).then((function(e){return e.json()})).then((function(t){return e.setState({tracks:t.tracks})})).catch((function(e){return alert(e.message)}))}})).catch((function(e){return alert(e.message)}))},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.searchArtist("coldplay")}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Music Master"}),Object(m.jsx)(H,{searchArtist:this.searchArtist}),Object(m.jsx)(_,{artist:this.state.artist}),Object(m.jsx)(F,{tracks:this.state.tracks})]})}}]),s}(i.Component),Q=(s(60),J);s(61);n.a.render(Object(m.jsx)(a.a,{children:Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/",component:U}),Object(m.jsx)(r.a,{path:"/music-master",component:Q})]})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.dc5dfb86.chunk.js.map