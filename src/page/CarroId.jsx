import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import API from '../api/api'
import Back from '../img/back.png'
import CarroS from '../img/carr.png'
import CarroFree from '../img/carFree.png'
import Modal from '../Modals/ModalCarroLivre'
import Modal2 from'../Modals/ModalLivrarCarro'

const CarroId = () => {
    const [carroID, setCarroID] = useState([])
    const { id } = useParams()
    const baseURL = '/carro/'
    let history = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    //abrir e fechar modals
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  //

    // Carregar Carro pelo ID
    useEffect(() => {
        if ( id ) {
          API.get(`${baseURL + id}`,{
            headers: {
              'Cache-Control': 'no-cache'
            }})
                .then(res => {
                    setCarroID(res.data)
                })
                .catch(err => {
                    console.log(err)
                })}
  }, [ id, API ]);


  // Excluir carro
  const excluiCarro = async (id)=> {
    await API.delete(baseURL + id)
    history('/carros')
  }
  const confirmaAoExcluir = (id) => {
    const confirmacao = window.confirm("Tem certeza que deseja excluir este carro?");
    if (confirmacao) {
      excluiCarro(id)
      alert("Carro excluído com sucesso!");
    } else {
      alert("Exclusão cancelada.");
    }
  };



  let clienteDoCarro = carroID.cliente
 if(clienteDoCarro !== undefined && clienteDoCarro !== null){
  // Retorno se o carro estive alugado
  return (
    <div className='conteinerCarroId'>
       <h1>Controle do Carro {carroID.modelo}</h1>
          <Link to='/carros'>
          <img className='back' src={Back} alt='back' />
          </Link>
        <div className='cardCarroId'>
          <img src={CarroS} className='imgCarroCard' alt="carro" />
          <h3>{carroID.modelo} &nbsp; &nbsp; {carroID.cor}</h3>
          <p>Placa:{carroID.placa} &nbsp; &nbsp; KM:{carroID.km}</p>
          <p>Diaria R${carroID.valorDiaria}</p>
          <p className='alugado'>Carro {carroID.status} para {clienteDoCarro.nome}</p>
          <button onClick={openModal2} className='btn-inicio'>Livrar Carro !</button>
         <div>
           <Modal2 isOpen2={isModalOpen2} onClose2={closeModal2} idCar={carroID.id}/> 
         </div>
        </div>
    </div>
    
  // Retorno se o carro estive livre  
  )}else{
    return(
      <div className='conteinerCarroId'>
      <h1>Controle do Carro {carroID.modelo}</h1>
        <Link to='/carros'>
        <img className='back' src={Back} alt='back' />
        </Link>
       <div className='cardCarroId'>
         <img src={CarroFree} alt='carrofree' className='imgCarroCard' />
         <h3>{carroID.modelo} &nbsp; &nbsp; {carroID.cor}</h3>
         <p>Placa:{carroID.placa} &nbsp; &nbsp; KM:{carroID.km}</p>
         <p>Diaria R${carroID.valorDiaria}</p>
         <p className='livre'>Carro {carroID.status}</p>
         <button onClick={openModal} className='btn-inicio'>Alugar Carro !</button><br/>
       </div>
       <button onClick={() => {confirmaAoExcluir(carroID.id)}} className='excluir'>Excluir carro</button> 
       <div>
        <Modal isOpen={isModalOpen} onClose={closeModal} id2={carroID.id} carro={carroID.modelo} /> 
       </div>
   </div>
    )
  }
}

export default CarroId