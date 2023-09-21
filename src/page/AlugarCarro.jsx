import React,{useState} from 'react'
import {useParams, useNavigate, Link} from "react-router-dom";
import API from '../api/api'
import Back from '../img/back.png'

const AlugarCarro = () => {
    const { id2, id, nome, carro} = useParams();
    const baseURL = '/carro/'
    let history = useNavigate()
    const [km, setKm] = useState('')

    function alugarCarroOk() {
        API.put(`${baseURL + id2}`, {
          km: km,
          status: 'alugado',
          cliente_id: id,
          })
          .then((response) => {
            alert(`Carro esta alugado para ${nome}`);
            history('/carros')
          }).catch(console.log);
      }

  return (
<div className='conteinerCarroId'>
       <h1>Alugar {carro}</h1>
          <Link to='/carros'>
          <img className='back' src={Back} alt='back' />
          </Link>
        <div className='cardCarroId'>
        <p style={{ fontStyle: 'italic', fontSize: 15 }}>Antes de confirmar o aluguel preencha o campo abaixo</p>
          <h3>Alugar {carro} para {nome}</h3>
          <h4>Qual KM atual do {carro}?</h4>
          <input className='inputCar' type='number' placeholder='Digita o KM aqui'
          value={km} onChange={(e)=> setKm(e.target.value)} /><br/>
            <button className='btn-inicio' onClick={() => {alugarCarroOk()}}>Alugar !</button>
        </div>
    </div>
  )
}

export default AlugarCarro