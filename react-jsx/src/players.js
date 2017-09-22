import React from 'react';


const players = (sports) => {    // przekazujemy sports żeby móc użyc tego niżej

    return (
        <ul>

            {sports.map(item => {

                const date  = new Date(item.date);  // parsowania ze stringa na date

                if (date >= Date.now()) {

                    return(

                        <li key={item.id}>
                            <strong>{item.name}</strong><br/>
                            <strong>{item.surname}</strong><br/>
                            <strong>{item.sport}</strong><br/>
                            <strong>{item.club}</strong><br/>
                            <strong>{item.date}</strong><br/><br/>
                        </li>
                    )


                }
                return null;
            })}
        </ul>
    );
};

export default players;