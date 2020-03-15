import React, { useState } from 'react'
import './App.css'
import Person from './Components/Person/Person'

function App() {
    const defaultPersons = [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
    ]

    const [persons, setPersons] = useState(defaultPersons)

    const [showPersons, setShowPersons] = useState(false)

    const getCurrentPersonsCopy = () => [...persons]

    const changeNameHandler = (event?: React.FormEvent<HTMLInputElement>) => {
        const newPersons = getCurrentPersonsCopy()
        newPersons[0].name = event?.currentTarget?.value || ''
        setPersons(newPersons)
    }

    const changeShowPersons = () => {
        if (!showPersons) {
            setPersons(defaultPersons)
        }
        setShowPersons(!showPersons)
    }

    const deletePerson = (index: number) => {
        const newPersons = getCurrentPersonsCopy()
        newPersons.splice(index, 1)
        setPersons(newPersons)
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <h2>This is really working!</h2>
            <button onClick={changeShowPersons}>Switch Name</button>
            {showPersons && (
                <div>
                    {persons.map((person, index) => (
                        <Person
                            key={index}
                            name={person.name}
                            age={person.age}
                            change={changeNameHandler}
                            click={() => deletePerson(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default App
