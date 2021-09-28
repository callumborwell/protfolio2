import React, {Component} from 'react';

const INTROS = [
    'a test analyst',
    'a digital art lover',
    'interested in new skills',
    'running every day'
];

class Intro extends Component {
    state = { introIndex: 0};

    componentDidMount() {
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.introInterval);
    }

    animateTitles = () => {
        this.introInterval = setInterval(() => {
            const introIndex = (this.state.introIndex + 1) % INTROS.length;

            this.setState({ introIndex });
        }, 4000);
    }

    render() {
        const intro = INTROS[this.state.introIndex];

        return (
            <p style={{color:"red"}}>I am {intro}</p>
        )
    }
}

export default Intro;