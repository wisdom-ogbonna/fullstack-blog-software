import React, { useEffect, useState } from 'react'
import axios from "axios"

function FormData() {

  const [data, setData] = useState("")

  const getData = async()=>{
    const response = await axios.get('http://localhost:8080/api/');
    setData(response.data)
  }

  useEffect(() =>{
    getData()
  },[])

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default FormData