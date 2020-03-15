import React, { useState } from 'react'
import './App.css'
import Person from './Components/Person/Person'

function App() {
    const [persons, setPersons] = useState([
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
    ])

    const switchNameHandler = (newName: string) => {
        console.log('switchNameHandler')
        const newArray = [...persons]
        newArray[0].name = newName
        setPersons(newArray)
    }

    const changeNameHandler = (event?: React.FormEvent<HTMLInputElement>) => {
        const newArray = [...persons]
        newArray[0].name = event?.currentTarget?.value || ''
        setPersons(newArray)
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <h2>This is really working!</h2>
            {persons.map((person, index) => (
                <Person
                    key={index}
                    name={person.name}
                    age={person.age}
                    change={changeNameHandler}
                />
            ))}
            <button onClick={() => switchNameHandler('Maximilian')}>
                Switch Name
            </button>
        </div>
    )
}

export default App
