import React, { useState } from "react";
import Message from "./Message";
import { validationEmail, validationName } from "./utils/validation";

import FormStyles from '../Styles/Form.module.css'

const Form = ({showForm, setShowForm}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  // console.log(showForm)
  // console.log(setShowForm)

  const [user, setUser]=useState({
    name:'',
    email:'',
  })
  const [showError, setShowError]=useState(
false)
  

  const handleChangeName=(e)=>{
    // console.log(e.target.value)
    setUser({...user,name: e.target.value.trim()})
    // console.log({...user})
  }

  const handleChangeEmail=(e)=>{
    // console.log(e.target.value)
    
    setUser({...user,email: e.target.value})
    // console.log({...user})
  }

  const handleSummit=(e)=>{
    e.preventDefault();
    if( validationName(user.name) && validationEmail(user.email)){
      console.log('nombre completo:'+user.name)
      console.log('email:'+ user.email)
      setShowForm(false)
      setShowError(false)

      
    }else{
      setShowError(true)
    }
    
  }

  return (
    <div>
      {showForm ?
        <>
          <form onSubmit={handleSummit} className={FormStyles.form}>
            <label>NOMBRE</label>
            <input type="text" onChange={handleChangeName}  />
            
            <label>EMAIL</label>
            <input type="text" onChange={handleChangeEmail} />
            <button >ENVIAR</button>
          </form>
        </>:(
          <Message user={user}/>
        )}

        {showError &&<>
          <h4 className="error"> Por favor verifique su información nuevamente</h4>
        </>}
    </div>

    
  );
};

export default Form;
