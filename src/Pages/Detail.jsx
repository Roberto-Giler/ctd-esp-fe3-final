import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail]=useState({})
  // Consumiendo el parhttps://jsonplaceholder.typicode.com/users/:idametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id}=useParams()
  // console.log(id)

  const url='https://jsonplaceholder.typicode.com/users/'+id
  useEffect(()=>{
    axios(url).then((res)=>{
      // console.log(res.data)
      setDetail(res.data)
    })
  }, [])
  
  
  return (
    <div className=''>
      <h1>Detail Dentist {detail.username} </h1>
      <h2>Nombre: {detail.name}</h2>
      <h2>Email: {detail.email}</h2>
      <h2>Telefono: {detail.phone}</h2>
      <h2>Siteo web: {detail.website}</h2>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail