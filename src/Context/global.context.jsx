import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {themes}  from "../Components/utils/themes.js";
import axios from "axios";
import { reducer } from "../reducers/reducer.js";


const lsFavs=JSON.parse(localStorage.getItem('favs')) || []
// console.log(lsFavs)  

export const initialState = {
  theme: themes.light, 
  data:[],
  favs:lsFavs,
}

export const ContextGlobal = createContext(undefined);
console.log(initialState)



const Context = ({ children }) => {
  const [state, dispatch]=useReducer(reducer,initialState)
  const url= 'https://jsonplaceholder.typicode.com/users'
  useEffect(()=>{
    axios(url).then((res)=>{
      console.log(res.data);
      dispatch({type:'charge_data', payload: res.data})
    });
  } ,[])

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs])
  return (
    <ContextGlobal.Provider value={{state , dispatch}}>
      {children}
    </ContextGlobal.Provider>
    
  );
};

export default Context

export const useContextGlobal=()=>useContext(ContextGlobal)
