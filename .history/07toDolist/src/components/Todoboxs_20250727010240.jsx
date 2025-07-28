import React from "react";

function Todobox({
inputpara,
deleteElement

}){

    return(
     <div className="input-wrapper" >
     <p>{inputpara}</p>
     <button onClick={(()=>{
        btn.parentElement.remove();
     })} className="btn" >Delete</button>
     </div>
    )
}