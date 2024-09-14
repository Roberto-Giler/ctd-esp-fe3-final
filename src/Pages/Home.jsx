import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import { useContextGlobal } from '../Context/global.context';
import { urls } from '../Components/utils/urls';
import AppStyles from '../Styles/Home.module.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const {state}=useContextGlobal()

    // console.log(state.data)

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((dentista)=> (
          <Card key={dentista.id} dentista={dentista}/>
        )
      )} 
      </div>
    </main>
  )
}

export default Home