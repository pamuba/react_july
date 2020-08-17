import React, { createElement } from 'react'

const Hello = (props) => {
    return (
        <div>
            <h1>Greetings {props.name}</h1>
        </div>
    )

    // return React.createElement('div', {id:"txt", className:'dummy'}, React.createElement('h1', null, 'Hi how ru??'));
}

export default Hello
