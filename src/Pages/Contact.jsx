import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [show, setShow]=useState(true)
  return (
    <div>
      {show &&<>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </>}
      <Form showForm={show} setShowForm={setShow}/>
    
    </div>
  )
}

export default Contact