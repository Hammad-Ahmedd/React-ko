import React from "react";

function Todobox({
inputpara,
delete,

}){

    return(
     <div className="input-wrapper" >
     <p>{inputpara}</p>
     <button onClick={delete} >Delete</button>
     </div>
    )
}