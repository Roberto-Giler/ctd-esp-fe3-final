import { useEffect } from "react"
import { themes } from "../Components/utils/themes"
import axios from "axios"

export function reducer(state, action) {

    switch (action.type){
      case 'change_theme':
        if (state.theme==themes.light){
          return {...state,theme: themes.dark}
        }else{
          return {...state,theme: themes.light}
        }
  
      case 'charge_data':
        return {...state, data: action.payload}

      case 'delete_fav':
        const filteredFavs = state.favs.filter(
            (fav) => fav.id !== action.payload.id
          );
        
        return {...state,favs: filteredFavs}
        
      case 'add_fav' :
        // console.log({...state,favs: [...state.favs, action.payload]})
        return {...state,favs: [...state.favs, action.payload]}
  
  
      default:
        throw new Error('Not found action');
        
    }
}