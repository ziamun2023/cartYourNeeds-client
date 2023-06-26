import { useEffect, useState } from "react"


export const getUserData=()=>{
  const [userdata,setUserdata]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/alluser')
    .then(res=>res.json())
    .then(data=>setUserdata(data))
  },[])
  return userdata
}