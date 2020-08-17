import React, { createElement } from 'react'

const Hello = (props) => {
    console.log({props})
    // props.name = "new Name";
    return (
        <div>
            <h1>Greetings {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )

    // return React.createElement('div', {id:"txt", className:'dummy'}, React.createElement('h1', null, 'Hi how ru??'));
}

export default Hello
