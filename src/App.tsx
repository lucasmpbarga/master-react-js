import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { Colors } from './Colors'
import Person from './Components/Person/Person'
import { Constants } from './Constants'
import { IPerson } from './Interfaces/IPerson'

const StyledButton = styled.button<{ showPersons: boolean }>`
    background-color: ${props => (props.showPersons ? Colors.RED : Colors.GREEN)};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => (props.showPersons ? Colors.SALMON : Colors.LIGHT_GREEN)};
        color: black;
    }
`

function App() {
    const defaultPersons: Array<IPerson> = [
        {
            id: 5,
            name: 'Max',
            age: 28,
        },
        {
            id: 6,
            name: 'Manu',
            age: 29,
        },
        {
            id: 7,
            name: 'Stephanie',
            age: 26,
        },
    ]

    const [persons, setPersons] = useState(defaultPersons)

    const [showPersons, setShowPersons] = useState(false)

    const changeNameHandler = (event: React.FormEvent<HTMLInputElement>, personId: number) => {
        const personIndex = [...persons].findIndex(person => person.id === personId)

        const newPerson = {
            ...persons[personIndex],
        }
        newPerson.name = event.currentTarget.value

        const newPersons = [...persons]
        newPersons[personIndex] = newPerson

        setPersons(newPersons)
    }

    const changeShowPersons = () => {
        if (!showPersons) {
            setPersons(defaultPersons)
        }
        setShowPersons(!showPersons)
    }

    const deletePerson = (index: number) => {
        const newPersons = [...persons]
        newPersons.splice(index, 1)
        setPersons(newPersons)
    }

    return (
        <div className="App">
            <h1>{Constants.HI_APP}</h1>
            <h2>{Constants.REALLY_WORKING}</h2>
            <StyledButton showPersons={showPersons} onClick={changeShowPersons}>
                {`${showPersons ? Constants.CLEAR : Constants.SHOW} ${Constants.PERSONS}`}
            </StyledButton>
            {showPersons && (
                <div>
                    {persons.map((person, index) => (
                        <Person
                            key={person.id}
                            id={person.id}
                            name={person.name}
                            age={person.age}
                            change={(event: React.FormEvent<HTMLInputElement>) =>
                                changeNameHandler(event, person.id)
                            }
                            click={() => deletePerson(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default App
