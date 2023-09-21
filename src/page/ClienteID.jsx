import React,{useState, useEffect} from 'react'
import Back from '../img/back.png'
import API from '../api/api'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ClientID = () => {
  const [nome, setNome] = useState('')
  const [documento, setDocumento] = useState('')
  const [telefone, setTelefone] = useState('')
  const [genero, setGenero] = useState('')
 
  let {id} = useParams()
  let history = useNavigate()

    useEffect(()=>{
        API.get(`/cliente/${id}`)
        .then((response)=>{
            setNome(response.data.nome)
            setDocumento(response.data.documento)
            setTelefone(response.data.telefone)
            setGenero(response.data.genero)
        })
      },[id])

      function updatClient() {
        API.put(`/cliente/${id}`, {
          nome: nome,
          documento: documento,
          telefone: telefone,
          genero: genero
          })
          .then((response) => {
            setNome(response.data.nome)
            setDocumento(response.data.documento)
            setTelefone(response.data.telefone)
            setGenero(response.data.genero)
            alert("Cliente atualizado com sucesso");
            history('/cliente')
          });
      }
      
      const excluiClient = async ()=> {
        await API.delete(`/cliente/${id}`)
        history('/cliente')
      }

      const confirmaAoExcluir = () => {
        const confirmacao = window.confirm("Tem certeza que deseja excluir este cliente?");
        if (confirmacao) {
          excluiClient()
          alert("Cliente excluído com sucesso!");
        } else {
          alert("Exclusão cancelada.");
        }
      };

    

  return (
    <div className='conteinerNewCar'>
          <h1 className='titleNewCar'>Atualizar Cliente {nome}</h1>
        <Link to='/cliente'>
         <img className='back' src={Back} alt='back' />
        </Link>
        <h3 className='titleNewCar'>Formulario para atualizar um cliente no sistema. Atencao preencher todos os campo</h3>
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
            <option value="Homem">Homem</option>
            <option value="Mulher">Mulher</option>
            <option value="Nao identificado">Nao identificado</option>
          </select><br/>

          <button onClick={updatClient} className='btn-inicio'>Atualizar !</button>
        </div>
        <button onClick={confirmaAoExcluir} className='excluir'>Excluir cliente</button> 
    </div>
  )
}

export default ClientID