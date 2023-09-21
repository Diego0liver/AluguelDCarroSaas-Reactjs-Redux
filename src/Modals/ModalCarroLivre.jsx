import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetcApiCliente} from '../api/fectApi'

const ModalCarroLivre = ({ isOpen, onClose, children, id2, carro }) => {
  if (!isOpen) return null;

  const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetcApiCliente())
    }, [dispatch]);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>X</button>
        <div>
            <h1>Escolha um cliente</h1>
            <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item) => (
            <tr key={item.id}>
              <a href={'/alugarCarro' + '/' + item.id + '/' + item.nome + '/' + id2 + '/' + carro + '/aluguel' }>
              <td>{item.nome}</td></a>
              <td>{item.documento}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        {children}
      </div>
    </div>
  );
};


export default ModalCarroLivre