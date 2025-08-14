import React from "react";

function Todobox({
    inputpara, del
}) {

    return (
        <div className="input-wrappers" >
            <p>{inputpara}</p>
            <button onClick={del} className="btn" >Delete</button>
        </div>
    )
}

export default Todobox