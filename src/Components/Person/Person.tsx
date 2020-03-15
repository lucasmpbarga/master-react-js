import React from 'react'
import './Person.css'
import { IPerson } from '../../Interfaces/IPerson'

const Person = (props: IPerson) => {
    return (
        <div className="person" onClick={props.click}>
            <p>
                I'm {props.name} and i am {props.age} years old!
            </p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default Person
