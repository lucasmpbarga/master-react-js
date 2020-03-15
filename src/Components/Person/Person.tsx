import React from 'react';
import { IPerson } from '../../Interfaces/IPerson';

const Person = (props: IPerson) => {
    console.log(props);
    return (
        <div>
            <p>I'm {props.name} and i am {props.age} years old!</p>
            {
                props.children &&
                <p>{props.children}</p>
            }
        </div>
    )
}

export default Person;