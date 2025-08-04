import React, { useEffect, useState } from 'react'

function Usegithubapi() {
const [data,setdata]=useState([])
useEffect(()=>{
    const fetch= ( async ()=>{
        const api=`https://api.github.com/users/${data}`
        const promise= await fetch(api)
        const jsn=await promise.json()
        setdata(jsn)
    })
fetch()
},[data])
return data
}

export default Usegithubapi
