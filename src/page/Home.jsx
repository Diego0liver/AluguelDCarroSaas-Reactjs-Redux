import React from 'react'
import { Link } from 'react-router-dom';
import Car from '../img/car.png'
import Cliente from '../img/peaple.png'


const Home = () => {
  return (
    <div>
      <nav className='nav'>
      <h1 className='navTitulo'>Aluguel de Carros goldCar !</h1>
     </nav>

     <div className='cardCorpo'>
      <div className='card'>
        <h2>Clientes</h2>
        <p className='subtitulo'>Codastro de clientes</p>
        <img className='imgHome' src={Cliente} alt='pessoa'/><br/>
        <Link to='/cliente'>
        <button className='btn-inicio'>Acessar !</button>
        </Link>
      </div>

      <div className='card'>
        <h2>Carros</h2>
        <p className='subtitulo'>Cadastro e aluguel de carros</p>
        <img className='imgHome' src={Car} alt='car'/><br/>
        <Link to='/carros'>
        <button className='btn-inicio'>Acessar !</button>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default Home