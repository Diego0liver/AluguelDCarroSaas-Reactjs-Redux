import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetcApiCliente} from '../api/fectApi'
import Back from '../img/back.png'
import Add from '../img/add.png'
import Edit from '../img/edit.png'
import { Link } from 'react-router-dom'

const Cliente = () => {
  const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  const [busca, setBusca] = useState('')
  
  useEffect(() => {
    dispatch(fetcApiCliente())
    }, [dispatch]);

    const filterCliente = cars.filter((carro) =>
    carro.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className='conteinerCarro'>
      
    <h1 className='tituloCarro'>Clientes</h1>
    <Link to='/'>
    <img className='back' src={Back} alt='back' />
    </Link>
    <div className='cabecalho'>
         <Link to='/novoClient'>
         <img className='addImg' src={Add} alt='add' />
         </Link>
         <input value={busca} onChange={(e)=>setBusca(e.target.value)}
          className='inputBusca' placeholder='Buscar cliente' ></input>
       </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Documento</th>
            <th>Telefone</th>
            <th>Genero</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {filterCliente.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.documento}</td>
              <td>{item.telefone}</td>
              <td>{item.genero}</td>
              <td>
              <Link to={{ pathname: `/clientes/${item.id}` }}>
                <img style={{ width: 30, cursor: 'pointer' }} src={Edit} alt='edit' />
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

  </div>
  )
}

export default Cliente