import React, { Component } from 'react';
import Preloading from './Preloading';
import Navba from './Navba';
import About from './About';
import Skills from './Skills';
import Demos from './Demos';
import Study from './Study';
import Contacts from './Contacts';

class App extends Component {

    state = {
        loading: true
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    render() {

        const { loading } = this.state;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block 
            return (
                <Preloading />
            ); // render null when app is not ready
        }

        return (
            <div>
                
                <Navba />
                <About />
                <Skills />
                <Demos />
                <Study />
                <Contacts />
            </div>

        )
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

export default App;