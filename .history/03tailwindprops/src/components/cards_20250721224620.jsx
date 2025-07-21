import React from 'react'

function Card({ username, whatdo }) {
    return (
        <>
            <div>
                <h1>{username}</h1>
                <h3>{whatdo}</h3>
            </div>
        </>
    )
}

export default Card
