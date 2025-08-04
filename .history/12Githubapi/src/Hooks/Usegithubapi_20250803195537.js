import React, { useEffect, useState } from 'react'

function Usegithubapi() {
const [data,setdata]=useState([])
useEffect(()=>{
    const fetch= (()=>{
        const api=`https://api.github.com/users/${data}`
        const promise= await fetch(api)
    })

},[data])

}

export default Usegithubapi
