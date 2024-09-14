// import './Styles/App.css'
import AppStyles from './Styles/App.module.css'

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
 
import {Route, Routes }  from "react-router-dom"
import  { routes }  from "./Components/utils/routes";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Favs from "./Pages/Favs"
import Detail from "./Pages/Detail"
import { useContextGlobal } from './Context/global.context';
import { themes } from './Components/utils/themes';



function App() {
  const {state}=useContextGlobal();

  const className=state.theme==themes.light? AppStyles.light:AppStyles.dark

  return (
      <div className={className} >
        <Navbar/>
        <Routes>
          <Route path={routes.Inicio} element={<Home/>}/>
          <Route path={routes.Contacto} element={<Contact/>}/>
          <Route path={routes.Destacados} element={<Favs/>}/>
          <Route path={routes.Detalles+'/:id'} element={<Detail/>}/>
        </Routes>
        <Footer/>
      
      </div>
  );
}

export default App;
