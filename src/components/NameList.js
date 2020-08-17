import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:30,
            skill:'Vue'
        }
    ]
    // const nameList = names.map(name => <h2>{name}</h2>)
    const personList = persons.map((person, index) => (
        <Person key={index} index={index} person={person}></Person>
    ))
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

           <div>{personList}</div> 
        </div>
    )
}

export default NameList
