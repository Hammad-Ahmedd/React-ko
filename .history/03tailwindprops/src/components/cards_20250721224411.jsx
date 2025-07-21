import React from 'react'

function Card({ username, whatdo }) {
    return (
        <>
            <h1>{username}</h1>

            <h3>{whatdo}</h3>
        </>
    )
}

export default Card
