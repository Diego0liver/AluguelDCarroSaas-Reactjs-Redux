import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetcApiCliente} from '../api/fectApi'
import Back from '../img/back.png'
import Add from '../img/add.png'
import Edit from '../img/edit.png'
import { Link } from 'react-router-dom'

const Cliente = () => {
  const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetcApiCliente())
    }, [dispatch]);

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
         <input className='inputBusca' placeholder='Buscar cliente' ></input>
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
          {cars.map((item) => (
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