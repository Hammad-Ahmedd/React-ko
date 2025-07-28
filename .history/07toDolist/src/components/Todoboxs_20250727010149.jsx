import React from "react";

function Todobox({
inputpara,
deleteElement

}){

    return(
     <div className="input-wrapper" >
     <p>{inputpara}</p>
     <button onClick={(()=>{
        
     })} className="btn" >Delete</button>
     </div>
    )
}