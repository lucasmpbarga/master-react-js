import React from 'react';

const Person = (props: any) => {
    return (
        <div>
            <p>I'm Person. {props.name}</p>
        </div>
    )
}

export default Person;