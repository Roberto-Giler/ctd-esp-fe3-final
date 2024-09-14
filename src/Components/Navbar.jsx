import React from 'react'
import { routes } from './utils/routes'

import	NavbarStyles from '../Styles/Navbar.module.css'

import { Link } from "react-router-dom"
import { useContextGlobal } from '../Context/global.context'
import { themes } from './utils/themes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  const handleChangeTheme=()=>{
    console.log(state.theme)
    dispatch({type: 'change_theme'})
  } 

  return (
    
    <nav className={state.theme==themes.light ? NavbarStyles.light: NavbarStyles.dark}>
      <Link to={routes.Inicio} className={NavbarStyles.link}>
        <img src="../../public/DH.ico" alt="DH-ODONTO" className={NavbarStyles.img}/>
        <p className={NavbarStyles.navbarTitle}><span>D</span>H Odonto </p>    
      </Link>
      <ul className={NavbarStyles.navbarMenu}>
          <li>
              <Link to={routes.Inicio}><p>INICIO</p></Link>
          </li>
          <li>
              <Link to={routes.Contacto}><p>CONTACTO</p></Link>
          </li>
          <li>
              <Link to={routes.Destacados}><p>DESTACADOS</p></Link>
          </li>
          <button onClick={handleChangeTheme}>Tema</button>
      </ul>
      
    </nav>
  )
}
export default Navbar