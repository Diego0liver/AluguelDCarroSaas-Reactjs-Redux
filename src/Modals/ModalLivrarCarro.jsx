import React,{useState} from 'react'
import API from '../api/api'
import {useNavigate } from 'react-router-dom'

const ModalLivrarCarro = ({ isOpen2, onClose2, idCar, children}) => {
  if (!isOpen2) return null;
  const baseURL = '/carro/';
  const [km, setKm] = useState('');
  let history = useNavigate();

    function livrarCarro() {
        API.put(`${baseURL + idCar}`, {
          km: km,
          status: 'livre',
          cliente_id: null,
          })
          .then((response) => {
            alert("Carro esta livre");
            history('/carros')
          }).catch(console.log);
      }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose2}>X</button>
        <div>
          <label>Km do carro na entrega</label><br/>
          <input type='number' value={km} onChange={(e)=> setKm(e.target.value)}
          placeholder='Digite o KM aqui' className='inputCar' /> <br/>
          <button onClick={() => {livrarCarro()}} className='btn-inicio' >Livrar carro</button>
        </div>
        {children}
      </div>
    </div>
  );
};


export default ModalLivrarCarro