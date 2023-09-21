import React from 'react'
import {  Route, Routes  } from "react-router-dom";
import Home from './page/Home';
import Cliente from './page/Cliente'
import Carros from './page/Carros'
import NewCar from './page/NewCar';
import Newclient from './page/Newclient';
import CarroId from './page/CarroId';
import ClientID from './page/ClienteID';
import AlugarCarro from './page/AlugarCarro';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cliente' element={<Cliente />} />
      <Route path='/carros' element={<Carros />} />
      <Route path='/novoCarro' element={<NewCar />} />
      <Route path='/novoClient' element={<Newclient />} />
      <Route path='/carro/:id' element={<CarroId />} />
      <Route path='/clientes/:id' element={<ClientID />} />
      <Route path='/alugarCarro/:id/:nome/:id2/:carro/aluguel' element={<AlugarCarro />} />
     </Routes>
    </>
  )
}

export default App
