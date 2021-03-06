import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './state-drills/HelloWorld';
import * as serviceWorker from './serviceWorker';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordian from './accordian-drill/Accordian';
import { sections } from './store';


ReactDOM.render(<Accordian sections={sections} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
