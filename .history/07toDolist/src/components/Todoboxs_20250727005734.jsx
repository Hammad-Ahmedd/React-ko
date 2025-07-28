import React from "react";

function Todobox({
inputpara,
deleteElement

}){

    return(
     <div className="input-wrapper" >
     <p>{inputpara}</p>
     <button onClick={delete} >Delete</button>
     </div>
    )
}