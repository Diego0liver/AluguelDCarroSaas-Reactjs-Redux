import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetcApi} from '../api/fectApi'
import Back from '../img/back.png'
import Add from '../img/add.png'
import { Link } from 'react-router-dom'

const Carros = () => {
   const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  
    useEffect(() => {
    dispatch(fetcApi())
    }, [dispatch])
  
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
         <input className='inputBusca' placeholder='Buscar carro' ></input>
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
            {cars.map((item) => (
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