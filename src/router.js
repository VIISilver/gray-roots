import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import About from './components/about/About.js';

export default (
    <HashRouter>
        <div>
            <Route component={About} path='/about' />
        </div>
    </HashRouter>
)