import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetcApi} from '../api/fectApi'
import Back from '../img/back.png'
import Add from '../img/add.png'
import { Link } from 'react-router-dom'

const Carros = () => {
   const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  const [busca, setBusca] = useState('')
  
    useEffect(() => {
    dispatch(fetcApi())
    }, [dispatch])
    const filterCarro = cars.filter((carro) =>
    carro.modelo.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <div className='conteinerCarro'>
      
      <h1 className='tituloCarro'>Carros</h1>
      <Link to='/'>
      <img className='back' src={Back} alt='back' />
      </Link>
       <div className='cabecalho'>
         <Link to='/novoCarro'>
         <img className='addImg' src={Add} alt='add' />
         </Link>
         <input value={busca} onChange={(e)=>setBusca(e.target.value)}
          className='inputBusca' placeholder='Buscar carro' ></input>
       </div>
        <table>
          <thead>
            <tr>
              <th>Modelo/Ano</th>
              <th>Cor</th>
              <th>Placa</th>
              <th>Diaria</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filterCarro.map((item) => (
              <tr key={item.id}>
                <td><Link to={{ pathname: `/carro/${item.id}` }}>
                  {item.modelo}</Link>
                </td>
                <td>{item.cor}</td>
                <td>{item.placa}</td>
                <td>R$ {item.valorDiaria}</td>
                <td style={{ background: item.status === 'livre' ? '#8bd18b' : '#fa7272' }}>
                  <Link to={{ pathname: `/carro/${item.id}` }}>
                  {item.status}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

    </div>
  )
}

export default Carros