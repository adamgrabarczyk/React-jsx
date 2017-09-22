import React from 'react';
import ReactDOM from 'react-dom';

import sports from './data/sports.json'
import Players from './players'



ReactDOM.render(<Players sports={sports}/>, document.getElementById('root')); //do funkcji przekazujemy argument sports

