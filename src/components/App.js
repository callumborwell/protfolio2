import React, {Component} from 'react';
import Navb from './Navb';
import About from './About';
import Skills from './Skills';
import Demos from './Demos';
import Study from './Study';
import Contacts from './Contacts';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        let bio = this.state.displayBio ? (
            <div>
                <p>I am here</p>
                <p>I like CSS</p>
                <p>I love art</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
        );

        return (
            <div>
                <Navb />
                <About />
                <Skills/>
                <Demos/>
                <Study/>
                <Contacts/>
            </div>
            
        )
    }
}

export default App;