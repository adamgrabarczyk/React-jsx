import React from 'react';
import ReactDOM from 'react-dom';

import sports from './data/sports.json'


ReactDOM.render(<ul>

    {sports.map(item => {
        return(

            <li key={item.id}>
                <strong>{item.name}</strong><br/>
                <strong>{item.surname}</strong><br/>
                <strong>{item.sport}</strong><br/>
                <strong>{item.club}</strong><br/>
                <strong>{item.date}</strong><br/><br/>
            </li>
        )

    })}
</ul>, document.getElementById('root'));

