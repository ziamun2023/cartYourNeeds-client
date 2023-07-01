
import { useEffect, useState } from "react"

 const allcarts=()=>{
  const [userdata,setUserdata]=useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5000/allcarts')
    .then(res=>res.json())
    .then(data=>setUserdata(data))
  },[])
  return userdata
}

export default allcarts