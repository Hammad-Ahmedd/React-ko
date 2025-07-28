import React from "react";

function Todobox({
    inputpara,
}) {

    return (
        <div className="input-wrapper" >
            <p>{inputpara}</p>
            <button onClick={((e) => {
                e.target.parentElement.remove()
            })} className="btn" >Delete</button>
        </div>
    )
}

export de