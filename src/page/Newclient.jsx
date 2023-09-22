import React,{useState} from 'react'
import Back from '../img/back.png'
import API from '../api/api'
import { Link } from 'react-router-dom'

const Newclient = () => {
  const [nome, setNome] = useState('')
  const [documento, setDocumento] = useState('')
  const [telefone, setTelefone] = useState('')
  const [genero, setGenero] = useState('')

  function newClientId(){
    if(nome && documento && telefone && genero){
        API.post('/cliente', {
        nome: nome,
        documento: documento,
        telefone: telefone,
        genero: genero
    }).then(alert('ok... cliente adicionado com sucesso')).catch(console.log)
        setNome("")
        setDocumento("")
        setTelefone("")
        }else{
        alert('Preencha todos os campos')
        }}

  return (
    <div className='conteinerNewCar'>
          <h1 className='titleNewCar'>Adicionar um novo Cliente</h1>
        <Link to='/cliente'>
         <img className='back' src={Back} alt='back' />
        </Link>
        <h3 className='titleNewCar'>Formulario para adicionar um novo cliente no sistema. Atencao preencher todos os campo</h3>
        <div className='formCarro'>
          <label className='labelCar'>Nome</label>
          <input className='inputCar' type='text'
          value={nome} onChange={(e)=> setNome(e.target.value)} 
          ></input>

          <label className='labelCar'>Documento</label>
          <input className='inputCar' placeholder='Somente numeros' type='text'
          value={documento} onChange={(e)=> setDocumento(e.target.value)} 
          ></input><br/>

          <label className='labelCar'>Telefone</label>
          <input className='inputCar' type='text'
          value={telefone} onChange={(e)=> setTelefone(e.target.value)} 
          placeholder='Colocar DDD'></input>

          <label className='labelCar'>Genero</label>
          <select name="genero" className='inputCar'
             value={genero} onChange={(e)=> setGenero(e.target.value)} >
            <option  selected></option>
            <option value="Homem">Homem</option>
            <option value="Mulher">Mulher</option>
            <option value="Outro">Outro</option>
          </select><br/>

          <button onClick={newClientId} className='btn-inicio'>Salvar !</button>
        </div>
    </div>
  )
}

export default Newclient