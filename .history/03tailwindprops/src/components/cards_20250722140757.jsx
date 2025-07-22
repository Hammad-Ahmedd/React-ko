import React from 'react'

function Card(props, { username = "If any think not there it will show this text", whatdo = "If any think not there it will show this text" }) {
    console.log(props)
    return (
        <>
            <div className='card-wrapper' >
                <h1>{username}</h1>
                <h3>{whatdo}</h3>
            </div>
        </>
    )
}
export default Card
