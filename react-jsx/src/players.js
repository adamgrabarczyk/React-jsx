import React from 'react';


class Players extends React.Component {   // parametr wywołania funkcji w komponencie to props

    render () {               // w komponencie opartym o klasy ciało funkcji umieszczamy w srdku metody render

        return (
            <ul>

                {this.props.sports.map(item => {

                    const date = new Date(item.date);  // parsowania ze stringa na date

                    if (date >= Date.now()) {

                        return (

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
    }};

export default Players;