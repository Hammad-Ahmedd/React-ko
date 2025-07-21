import React from 'react'

function Card(props) {
    return (
        <>
            <h3>{props.username}</h3>
            <h1>{props.whatdo}</h1>
        </>
    )
}

export default Card
