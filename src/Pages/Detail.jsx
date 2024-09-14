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
      <h1>Detalles de la destista "{detail.username}"" </h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Siteo web</th>
        </tr>
        <tr>
          <td>{detail.name}</td>
          <td>{detail.email}</td>
          <td>{detail.phone}</td>
          <td>{detail.website}</td>
        </tr>
      </table>
      
    </div>
    

  )
}

export default Detail