import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p> I am {props.name}, please enjoy the site. </p>
        </div>
    )
};

export default person;