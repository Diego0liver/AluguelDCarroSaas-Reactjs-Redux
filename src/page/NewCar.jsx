import React,{useState} from 'react'
import Back from '../img/back.png'
import API from '../api/api'
import { Link } from 'react-router-dom'

const NewCar = () => {
  const [modelo, setModelo] = useState('')
  const [cor, setCor] = useState('')
  const [placa, setPlaca] = useState('')
  const [km, setKm] = useState('')
  const [diaria, setDiaria] = useState('')

function newCarId(){
  if(modelo && cor && placa && km && diaria){
      API.post('/carro', {
      modelo: modelo,
      cor: cor,
      placa: placa,
      km: km,
      valorDiaria: diaria,
      status: 'livre',
      cliente_id: null
  }).then(alert('ok... carro adicionado com sucesso')).catch(console.log)
      setModelo("")
      setCor("")
      setPlaca("")
      setKm("")
      setDiaria("")
      }else{
      alert('Preencha todos os campos')
      }}

  return (
    <div className='conteinerNewCar'>
        <h1 className='titleNewCar'>Adicionar um novo Carro</h1>
        <Link to='/carros'>
         <img className='back' src={Back} alt='back' />
        </Link>
        <h3 className='titleNewCar'>Formulario para adicionar um novo carro no sistema. Atencao preencher todos os campo</h3>
        <div className='formCarro'>
          <label className='labelCar'>Modelo/Ano:</label>
          <input className='inputCar' placeholder='Ex: Palio/14'
          value={modelo} onChange={(e)=> setModelo(e.target.value)} 
          ></input>

          <label className='labelCar'>Cor:</label>
          <input className='inputCar'
           value={cor} onChange={(e)=> setCor(e.target.value)} 
          ></input><br/>

          <label className='labelCar'>Placa:</label>
          <input className='inputCar'
           value={placa} onChange={(e)=> setPlaca(e.target.value)} 
          ></input>

          <label className='labelCar'>KM:</label>
          <input className='inputCar'
           value={km} onChange={(e)=> setKm(e.target.value)} 
          ></input><br/>

          <label className='labelCar'>Valor Diaria:</label>
          <input className='inputCar'
           value={diaria} onChange={(e)=> setDiaria(e.target.value)} 
          ></input><br/>
          <button onClick={newCarId} className='btn-inicio'>Salvar !</button>
        </div>
    </div>
  )
}

export default NewCar