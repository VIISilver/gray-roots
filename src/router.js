import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import About from './components/about/About.js';
import Home from './components/home/Home.js';

export default (
    <HashRouter>
        <div>
            <Route component={Home} exact path='/' />
            <Route component={About} path='/about' />
        </div>
    </HashRouter>
)