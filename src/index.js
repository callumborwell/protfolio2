import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import App from './components/App';
import MusicMaster from './projects/music-master';
import './index.css';
import './css/preload.css';

ReactDOM.render(
    <Router basename='/protfolio2'>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/music-master' component={MusicMaster} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);


