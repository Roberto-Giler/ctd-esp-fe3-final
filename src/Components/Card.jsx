import { routes } from "./utils/routes";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/global.context";
import CardStyles from '../Styles/Card.module.css'
import { themes } from "./utils/themes";


const Card = ({dentista}) => {
  
  const {state, dispatch}=useContextGlobal()
  // console.log(state.favs)
  
  const isFav=state.favs.find((fav)=>fav.id==dentista.id)
  // console.log(isFav)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    // console.log(isFav)
    dispatch({type: isFav ? 'delete_fav':'add_fav', payload: dentista })
    // console.log(state.favs)
  }
  const classNamesCard=`${CardStyles.card} ${state.theme==themes.light?CardStyles.light:CardStyles.dark}`
  console.log(classNamesCard)
  // console.log(dentista)
  return (
    <div className={classNamesCard}>
        <Link to={routes.Detalles+'/'+dentista.id}>
          <img src="../../public/images/doctor.jpg" alt="" />
          <h2>{dentista.name}</h2>
          <h3>{dentista.username}</h3>
        </Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className={CardStyles.favButton}>{isFav ?'isfavorite':'isnt favorite'}</button>
    </div>
  );
};

export default Card;
