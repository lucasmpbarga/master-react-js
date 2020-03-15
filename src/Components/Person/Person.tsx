import React from 'react'
import './Person.css'
import { Person } from '../../Interfaces/Person'

const Person = (props: Person) => {
    return (
        <div className="person">
            <p>
                I'm {props.name} and i am {props.age} years old!
            </p>
            {props.children && <p>{props.children}</p>}
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default Person
