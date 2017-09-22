import React from 'react';
import ReactDOM from 'react-dom';

import sports from './data/sports.json'
import players from './players'



ReactDOM.render(players(sports), document.getElementById('root')); //do funkcji przekazujemy argument sports

