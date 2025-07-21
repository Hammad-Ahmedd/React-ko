import React from 'react'

function Card({ username = "If any think not there it will show this text", whatdo = "If any think not there it will show this text" }) {
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
