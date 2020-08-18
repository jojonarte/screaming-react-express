import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/Home';
import { store } from './store';
console.log(store.getState());

ReactDOM.render(<Home />, document.getElementById('root'));
